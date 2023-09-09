public with sharing class trgHelper {
    public static void trgMethod(List<Account> accList, Map<Id, Account> oldMap) {
        Set<Id> accIds = new Set<Id>();

        if (!accList.isEmpty()) {
            for (Account acc : accList) {
                if (acc.Type != oldMap.get(acc.Id).Type) {
                    accIds.add(acc.Id);
                }
            }
        }

        List<Contact> conList = [SELECT Id, Email, AccountId, LastName FROM Contact WHERE AccountId IN :accIds];
        List<Messaging.SingleEmailMessage> emailList = new List<Messaging.SingleEmailMessage>();

        if (!conList.isEmpty()) {
            for (Contact con : conList) {
                if (con.Email != null) {
                    Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
                    mail.setTargetObjectId(con.Id);
                    mail.setSenderDisplayName('System Administrator');
                    mail.setSubject('Account Update Info');

                    String body = 'Dear ' + con.LastName + ',<br/>';
                    body += 'Your account type has been updated successfully.';
                    mail.setHtmlBody(body);
                    mail.toAddresses = new String[] { con.Email };
                    emailList.add(mail);
                }
            }
        }

        if (!emailList.isEmpty()) {
            Messaging.sendEmail(emailList);
        }
    }
}