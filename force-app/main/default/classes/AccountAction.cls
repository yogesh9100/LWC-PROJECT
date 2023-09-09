public class AccountAction {
    @InvocableMethod
    public static List<Decimal> updateAccRevenue(List<Id> ids)
    {
        List<Opportunity> oppList = [SELECT AccountId, Amount From Opportunity WHERE Id =: ids[0]];
        List<Account> accList = [SELECT AnnualRevenue From Account WHERE Id = :oppList[0].AccountId];
        List<Decimal> AnnualRevenueList = new List<Decimal>();
        accList[0].AnnualRevenue = accList[0].AnnualRevenue + oppList[0].Amount;
        update accList;
        annualRevenueList.add(accList[0].AnnualRevenue);
        return annualRevenueList;
      
    }

    
}