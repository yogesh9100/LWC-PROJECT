//Create an Apex trigger that prevents the deletion of a Contact record if the associated Account is inactive.
trigger PreventContactDeletion on Contact (before delete) {
    /*Set<Id> inactiveAccountIds = new Set<Id>();
    
    // Collect all inactive Account IDs associated with the Contacts being deleted
    for (Contact con : Trigger.old) {
        if (con.AccountId != null) {
            inactiveAccountIds.add(con.AccountId);
        }
    }
    
    // Query for inactive Accounts
    List<Account> inactiveAccounts = [SELECT Id, Active_Account__c FROM Account WHERE Id IN :inactiveAccountIds AND Active_Account__c = false];
    
    for (Contact con : Trigger.old) {
        if (con.AccountId != null) {
            // Check if the associated Account is inactive
            for (Account acc : inactiveAccounts) {
                if (con.AccountId == acc.Id) {
                    con.addError('Cannot delete this Contact. Associated Account is inactive.');
                }
            }
        }
    }*/
}