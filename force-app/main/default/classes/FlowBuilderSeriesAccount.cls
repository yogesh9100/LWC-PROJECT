public  class FlowBuilderSeriesAccount
 {
    @InvocableMethod(label='Fetch Accounts' description = 'this will return list of accounts' category='Account')
    public static list<List<Account>> welcomeMessage(List<List<String>> accountIdsList)
    {
        List<List<Account>> allAccounts = new List<List<Account>>();
        allAccounts.add([Select Id, Name From Account WHERE Id IN : accountIdsList.get(0) LIMIT 10]);
        return allAccounts;
    }
    
}