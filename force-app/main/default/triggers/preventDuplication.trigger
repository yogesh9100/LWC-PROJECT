trigger preventDuplication on Contact (before insert, before update) {
    /*Map<String, Contact> emailMap = new Map<String, Contact>();
    Map<String, Contact> phoneMap = new Map<String, Contact>();

    if (Trigger.isBefore && Trigger.isInsert) {
        if (!Trigger.new.isEmpty()) {
            for (Contact con : Trigger.new) {
                emailMap.put(con.Email, con);
                phoneMap.put(con.Phone, con); // Fixed from con.Email to con.Phone
            }
        }
    }

    if (Trigger.isBefore && Trigger.isUpdate) {
        if (!Trigger.new.isEmpty()) {
            for (Contact con : Trigger.new) {
                if (Trigger.oldMap.get(con.Id).Email != con.Email) {
                    emailMap.put(con.Email, con);
                }

                if (Trigger.oldMap.get(con.Id).Phone != con.Phone) { // Fixed from con.Email to con.Phone
                    phoneMap.put(con.Phone, con);
                }
            }
        }
    }

    String errorMessage = '';
    List<Contact> existingRecords = [
        SELECT Id, Email, Phone 
        FROM Contact 
        WHERE Email IN :emailMap.keySet() OR Phone IN :phoneMap.keySet()
    ];

    if (!existingRecords.isEmpty()) {
        for (Contact conObj : existingRecords) {
            if (conObj.Email != null) {
                if (emailMap.get(conObj.Email) != null) {
                    errorMessage = 'Email';
                }
            }
            if (conObj.Phone != null) { // Fixed from conObj.Email to conObj.Phone
                if (phoneMap.get(conObj.Phone) != null) { // Fixed from phoneMap.get(conObj.Email) to phoneMap.get(conObj.Phone)
                    errorMessage = errorMessage + (errorMessage != '' ? ' and phone' : 'phone');
                }
            }
        }
    }

    if (!Trigger.new.isEmpty()) {
        for (Contact objCon : Trigger.new) {
            if (errorMessage != '') {
                objCon.addError('Your contact ' + errorMessage + ' already exists in the system.');
            }
        }
    }*/
}