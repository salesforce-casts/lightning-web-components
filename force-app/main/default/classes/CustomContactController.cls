public with sharing class CustomContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> fetchContact(String accountId){
        return [SELECT Id, Name FROM Contact WHERE AccountId =: accountId];
    }
}