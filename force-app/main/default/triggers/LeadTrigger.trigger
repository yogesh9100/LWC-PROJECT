trigger LeadTrigger on Lead (before insert,before update) {
    /*if(trigger.isBefore && (trigger.IsInsert ||trigger.IsUpdate))
        for(Lead ldvar:trigger.new){
    if(ldvar.LeadSource=='web')
    {
    ldvar.Rating='cold';
    }
    else
    {
        ldvar.Rating='hot';
    }
        }*/
    }