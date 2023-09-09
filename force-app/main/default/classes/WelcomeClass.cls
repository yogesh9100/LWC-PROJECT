public class WelcomeClass {
    
    @InvocableMethod(label = 'display welcome message'
                    description = 'this method will return a welcome message'
                    category = 'flows bootcamp'
                    iconName='slds:custom:custom80'
                    )
    public static List<String> welcomeMessage(List<String> inputs){
        String userName = inputs.get(0);
        List<String> welcomeMessageList = new List<String>();
        welcomeMessageList.add('Hi' + userName+', welcome to flow bootcamp! it is coming from invocable method!');
        return welcomeMessageList;
        
    }
}