trigger CaseTrigger on Case (before insert,before update) {
    ID HPCMTqueueId = [SELECT Queue.Id FROM queuesobject WHERE queue.name='High Priority Case Management Team'].Queue.Id;

    List<Case> updateCaseList=new List<Case>();
    if(trigger.isBefore&& trigger.isUpdate)
    {
    for(Case c:trigger.new)
    {
        if(c.Priority=='High')
        {

            c.OwnerId = HPCMTqueueId;
           updateCaseList.add(c);


 

        }
    }
    }
        //if(updateCaseList.size()>0)
        //{
       //update updateCaseList;


    }