public with sharing class exploreContactController {
    
    @AuraEnabled(cacheable=true)
    public static Contact getRandomContact(){
        return [SELECT Id, FirstName, LastName FROM Contact LIMIT 1];
    }
}