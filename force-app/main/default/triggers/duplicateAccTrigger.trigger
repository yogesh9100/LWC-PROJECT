trigger duplicateAccTrigger on Account (before insert,before update) 
{
    /*set<String> accNames = new set<String>();

    if(trigger.isBefore && (trigger.isInsert || trigger.isUpdate))
    {
        if(!trigger.new.isEmpty())
        {
            for(Account ac : trigger.new)
            {
                accNames.add(ac.Name);
            }
        }
    }

    List<Account> accList = [select Id,Name from Account where Name IN : accNames];

    Map<String,Account> existingAccMap = new Map<String, Account>();

    if(!accList.isEmpty())
    {
        for(Account acct : accList)
        {
            existingAccMap.put(acct.Name,acct);
        }
        if(!trigger.new.isEmpty())
        {
            for(Account accObj : trigger.new)
            {
                if(existingAccMap.containsKey(accObj.Name))
                {
                    accObj.addError('Account Name already exists');
                }
            }
        }
    }*/

}