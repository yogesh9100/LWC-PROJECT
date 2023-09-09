public class ContactCreationQueueable implements Queueable {
    private List<Account> accListToCreateContacts;
    
    public ContactCreationQueueable(List<Account> expectingAccountsFromTrigger){
        this.accListToCreateContacts = expectingAccountsFromTrigger;
    }
    
    public void execute(QueueableContext qcont){
        /*List<Contact> conListToInsert = new List<Contact>();
        
        for(Account acc: accListToCreateContacts){
            Contact Con = new Contact();
            con.lastname = acc.Name;
            con.AccountId = acc.Id;
            conListToInsert.add(con);
        }
        if(conListToInsert.size()>0)
            INSERT conListToInsert;
    }*/

}
}