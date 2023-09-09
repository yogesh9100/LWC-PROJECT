@isTest
public class Demo1TestClass {
    // Test method for Account object
    // 
    @TestSetup
    static Void mySetpData(){
        Account acc = new Account(Name = 'TestAcct', Industry = 'Education', Rating = 'Hot', Phone = '999-111');
        insert acc;
    }
        
    @isTest
    static void accountTest(){
        Account accountRecord = [Select Id From Account where Name = 'TestAcct'];
        System.debug(''+accountRecord);
        System.assertNotEquals(null, accountRecord);
    }

    // Test method for Contact object
    @isTest
    static void contactTest(){
        // Creating an Account record with required fields
         Account accountRecord = [Select Id From Account where Name = 'TestAcct']; // Inserting the Account record into the database

        // Creating a Contact record associated with the previously created Account
        Contact con = new Contact(FirstName = 'yogesh', LastName = 'sai', Email = 'yogesh@gmail.com', Phone = '789-234',
                                 AccountId = accountRecord.Id);
        insert con; // Inserting the Contact record into the database
    }

    // Test method for Opportunity object
    @isTest
    static void OpportunityTest(){
        // Creating an Account record with required fields
         Account accountRecord = [Select Id From Account where Name = 'TestAcct']; // Inserting the Account record into the database

        // Creating an Opportunity record associated with the previously created Account
        Opportunity opp = new Opportunity(Name = 'yogi', AccountId = accountRecord.Id,
                                         Amount = 989, StageName = 'Closed Won', CloseDate = System.today().addMonths(7));
        insert opp; // Inserting the Opportunity record into the database
    }
}