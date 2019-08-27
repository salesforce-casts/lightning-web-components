public with sharing class CreateContactController {
    @AuraEnabled(cacheable=true)
    public static Account createContact(String accountId){
        System.debug(' 🚀 ' +accountId);
        
        return [SELECT Id, Name FROM Account WHERE Id=: accountId];
    }
}