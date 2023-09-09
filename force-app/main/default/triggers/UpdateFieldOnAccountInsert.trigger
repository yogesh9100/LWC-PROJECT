//Write an Apex trigger that updates a field on the Account object after an insert event.
trigger UpdateFieldOnAccountInsert on account (after insert) {
    /*List<Account> accountsToUpdate = new List<Account>();

    for(Account acc : trigger.new){
        Account updatedAccount = new Account(
            Id = acc.Id,
            CustomerPriority__c = 'high'
        );
        accountsToUpdate.add(updatedAccount);
    }
    if ( !accountsToUpdate.isEmpty()){
        update accountsToUpdate;
    }*/

}