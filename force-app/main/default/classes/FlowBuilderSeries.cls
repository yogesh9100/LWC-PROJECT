public class FlowBuilderSeries {
    @InvocableMethod(label='Welcome Message' description='This is to display a welcome message' category='welcome')
    public static List<OutputResource> welcomeMessage(List<InputResource> inputs) {
        List<OutputResource> outputToReturn = new List<OutputResource>();
        
        // Check if the inputs list is not empty
        if (inputs != null && inputs.size() > 0) {
            InputResource input = inputs.get(0);
            OutputResource output = new OutputResource();
            output.name = input.name;
            output.age = input.age;
            output.place = input.place;
            outputToReturn.add(output);
        }
        
        return outputToReturn;
    }

    public class InputResource {
        @InvocableVariable(label='Your Name' required='true' description='Your Name')
        public String name;
        @InvocableVariable(label='Your Age' required='true' description='Your Age')
        public Integer age;
        @InvocableVariable(label='Your Place' required='true' description='Your Place')
        public String place;
    }
    
    public class OutputResource {
        @InvocableVariable(label='Name' description='Name')
        public String name;
        @InvocableVariable(label='Age' description='Age')
        public Integer age;
        @InvocableVariable(label='Place' description='Place')
        public String place;
    }
}