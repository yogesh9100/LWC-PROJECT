trigger closeOppTrg on Account (after update) 
{
    /*set<Id>accIds = new set<Id>();

    if(trigger.isAfter && trigger.isUpdate)
    {
        for(Account acc : trigger.new)
        {
            accIds.add(acc.Id);
        }
    }

    if(!accIds.isEmpty())
    {
        Date day30 = date.today()-30;
        List<Opportunity>listToUpdate = new List<Opportunity>();
        List<Opportunity> oppList = [select Id,AccountId,Test_Created_Date__c,stagename from Opportunity where AccountId IN : accIds];

        if(!oppList.isEmpty())
        {
            for(Opportunity opp : oppList)
            {
                if(opp.Test_Created_Date__c < day30 && opp.stagename != 'closed won')
                {
                    opp.stagename = 'closed won';
                    opp.closeDate = date.today();
                    listToUpdate.add(opp);
                }
             }
        }
        if(!listToUpdate.isEmpty())
        {
            update listToUpdate;

        }
    }*/

}