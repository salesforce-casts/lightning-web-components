public with sharing class ExlporeContinuationController {
    public ExlporeContinuationController() {

    }
    

    @AuraEnabled(continuation=true cacheable=true)
    public static Object startRequest(){
        Continuation con = new Continuation(40);

        con.ContinuationMethod = 'processResponse';

        con.state = 'HEY!!! Salesforce Casts';

        HttpRequest req = new HttpRequest();
        req.setMethod('GET');
        req.setEndpoint('https://www.googleapis.com/youtube/v3/search?part=snippet&q=salesforce&key=XXXXXXXXXXXXXXXXXXX);


        con.addHttpRequest(req);

        return con;

    }

    @AuraEnabled(cacheable=true)
    public static Object processResponse(List<String> labels, Object state){
        HttpResponse res = Continuation.getResponse(labels[0]);
        String result = res.getBody();
        return result;
    }
}
