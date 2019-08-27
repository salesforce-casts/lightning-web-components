public with sharing class exploreApexContinuation {
    public exploreApexContinuation() {

    }
    

    @AuraEnabled(continuation=true cacheable=true)
    public static Object startRequest(){
        

        //1. Instantiate Continuation class
        Continuation con = new Continuation(40);

        con.ContinuationMethod = 'processResponse';

        con.state = 'HEY!!! Salesforce Casts';

        HttpRequest req = new HttpRequest();
        req.setMethod('GET');

        req.setEndpoint('https://www.salesforcecasts.com/');

        con.addHttpRequest(req);

        return con;
    }

    @AuraEnabled(cacheable=true)
    public static string processResponse(List<String> labels, Object state){
        HttpResponse response = Continuation.getResponse(labels[0]);        

        String result = response.getBody();

        return result;
    }






}
