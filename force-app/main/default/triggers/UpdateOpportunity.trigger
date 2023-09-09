trigger UpdateOpportunity on Opportunity (before insert, before update) {
    /*for (Opportunity opp : Trigger.new) {
        if (opp.Amount > 1000000) {
            // Assign the specific stage value if Amount is greater than $1,000,000
            opp.StageName = 'High Value Opportunity';
        }
    }*/
}