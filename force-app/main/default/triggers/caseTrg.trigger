trigger caseTrg on Case (after insert)
 {
    if(trigger.isAfter && trigger.isInsert)
    {
        if(!trigger.new.isEmpty())
        {
            caseTriggerHelperClass.updateCaseNumber(trigger.new);
        }
    }

}