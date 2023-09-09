trigger LeadConversionEmailNotification on Lead (after update) {
    /*List<Id> convertedLeadIds = new List<Id>();
    
    for (Lead lead : Trigger.new) {
        Lead oldLead = Trigger.oldMap.get(lead.Id);
        
        if (lead.IsConverted && !oldLead.IsConverted && lead.ConvertedOpportunityId != null) {
            convertedLeadIds.add(lead.Id);
        }
    }
    
    if (!convertedLeadIds.isEmpty()) {
        List<Messaging.SingleEmailMessage> emailList = new List<Messaging.SingleEmailMessage>();
        
        for (User owner : [SELECT Id, Email FROM User WHERE Id IN (SELECT OwnerId FROM Lead WHERE Id IN :convertedLeadIds)]) {
            Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
            email.setToAddresses(new String[] { owner.Email });
            email.setSubject('Lead Converted to Closed Converted Opportunity');
            email.setPlainTextBody('Your lead has been converted to a Closed Converted Opportunity.');
            emailList.add(email);
        }
        
        Messaging.sendEmail(emailList);
    }*/
}