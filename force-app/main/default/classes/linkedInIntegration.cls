public with sharing class linkedInIntegration {
    
    @AuraEnabled
    public static void getProfilePhoto(){
        Http http = new Http();
        Httprequest request = new Httprequest();
        //GET https://api.linkedin.com/v2/me?projection=(id,profilePicture(displayImage~digitalmediaAsset:playableStreams))
        request.setEndpoint('callout:LinkedIn_name_credential/v2/me?projection=(id,profilePicture(displayImage~digitalmediaAsset:playableStreams))');
        request.setMethod('GET');
        //send the request
        Httpresponse response = http.send(request);

        if(response.getStatusCode() == 200) {
            System.debug('Response received sucessfully ' + response.getBody());
        } else {
            System.debug('Response Failure ' + response.getBody());
        }
        
    }
}