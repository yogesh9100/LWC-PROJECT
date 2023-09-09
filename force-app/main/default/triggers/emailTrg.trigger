trigger emailTrg on Account (after update)
{
    if(trigger.isAfter && trigger.isUpdate)
    {
        for(Account acct : trigger.new)
        {
            trgHelper.trgMethod(trigger.new,trigger.oldMap);
        }
    }

}