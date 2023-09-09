//whenever a record is inserted to the account the related contact also get inserted
trigger AccountTigger on Account (after insert) 
{
 /*List<contact> newContacts = new List<contact>();
 for (Account acc : trigger.new) 
 {
    contact con = new Contact();
    con.Firstname = 'New';
    con.LastName = 'Contact';
    con.AccountId = acc.Id;
    newContacts.add(con);
 }
 if(!newContacts.isEmpty()){
    insert newContacts;
 }*/

}