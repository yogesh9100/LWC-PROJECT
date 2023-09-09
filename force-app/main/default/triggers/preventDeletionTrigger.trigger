trigger preventDeletionTrigger on Account (before delete) 
{
    /*if(trigger.isBefore && trigger.isDelete)
    {
        for(Account acc : trigger.old )
        {
            if(acc.Active_Account__c == true)
            {
                acc.addError('you cannot delete an active account');
            }
        }
    }*/

}