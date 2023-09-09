trigger CaseTriggerPriorityUpdate on Case (before insert, before update) {
    /*if (Trigger.isBefore) {
        if (Trigger.isInsert) {
            CaseHandler.onBeforeInsert(Trigger.new);
        }
        if (Trigger.isUpdate) {
            CaseHandler.onBeforeUpdate(Trigger.new, Trigger.oldMap);
        }
    }*/
}