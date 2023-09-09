public class FirstJobQueueable implements queueable {
    public void execute(QueueableContext qCntx){
        
        Delete[select id from Account where createddate=LAST_YEAR];
        system.enqueueJob(new SecondJobQueueable());
    }

}