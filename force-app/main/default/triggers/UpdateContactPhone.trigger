trigger UpdateContactPhone on Account (after insert, after update) {
    // List to hold the updated Contact records
    List<Contact> updatedContacts = new List<Contact>();

    // Map to store the previous Account phone values
    Map<Id, String> previousAccountPhones = new Map<Id, String>();

    // Handling Account creation and update
    if (Trigger.isAfter && (Trigger.isInsert || Trigger.isUpdate)) {
        for (Account acc : Trigger.new) {
            Account oldAccount = Trigger.isUpdate ? Trigger.oldMap.get(acc.Id) : null;

            // Check if the Account phone field is updated
            if (oldAccount == null || acc.Phone != oldAccount.Phone) {
                // Retrieve the related Contact records
                List<Contact> contacts = [SELECT Id, HomePhone, OtherPhone FROM Contact WHERE AccountId = :acc.Id];

                // Update the Contact records
                for (Contact con : contacts) {
                    if (Trigger.isInsert || acc.Phone != oldAccount.Phone) {
                        // Update the Contact's HomePhone with the new Account phone
                        con.HomePhone = acc.Phone;
                    }
                    if (oldAccount != null) {
                        // Store the previous Account phone value in the Contact's OtherPhone
                        con.OtherPhone = oldAccount.Phone;
                    }
                    updatedContacts.add(con);
                }
            }

            // Store the previous Account phone value for reference in the next iteration
            previousAccountPhones.put(acc.Id, acc.Phone);
        }
    }

    // Perform the updates on the Contact records
    if (!updatedContacts.isEmpty()) {
        update updatedContacts;
    }
}