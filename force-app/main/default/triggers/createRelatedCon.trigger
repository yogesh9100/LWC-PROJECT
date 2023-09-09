trigger createRelatedCon on Account (after insert,after update)
{
    /*List<Contact> listToInsertCon = new List<Contact>();
    if(trigger.isAfter && (trigger.isInsert || trigger.isUpdate))
    {
        for(Account ac : trigger.new)
        {
            if(ac.Create_Contact_Checkbox__c == true)
            {
                Contact con = new Contact();
                con.FirstName = 'Test';
                con.LastName = ac.Name;
                con.AccountId = ac.Id;
                con.phone = ac.phone;
                listToInsertCon.add(con);
            }
        }
    }
    if(!listToInsertCon.isEmpty())
    {
        insert listToInsertCon;
    }*/
}