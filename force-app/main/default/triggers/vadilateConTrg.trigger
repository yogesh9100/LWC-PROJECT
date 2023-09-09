trigger vadilateConTrg on Contact (before insert) 
{
    /*set<Id> accIds = new set<Id>();
    if(trigger.isBefore && trigger.isInsert)
    {
        if(!trigger.new.isEmpty())
        {
            for(Contact con : trigger.new)
            {
                if(con.AccountId != null)
                {
                    accIds.add(con.AccountId);
                }
            }
        }
    }
  Map<Id,Integer> contactCount =new Map<Id,Integer>();

 List<AggregateResult> aggrList = [select AccountId,count(Id) contactCount from Contact where AccountId IN : accIds group by AccountId];
 if(!aggrList.isEmpty())
 {
    for(AggregateResult aggr : aggrList)
    {
        contactCount.put((Id)aggr.get('AccountId'),(Integer)aggr.get('contactCount'));
    }
 }

 if(!trigger.new.isEmpty())
 {
    for(Contact conObj : trigger.new)
    {
        if(conObj.AccountId != null && contactCount.get(conObj.AccountId) >=2)
        {
            conObj.addError('you cannot insert this contact as there are already 2 contacts present');
        }
    }
 }*/
}