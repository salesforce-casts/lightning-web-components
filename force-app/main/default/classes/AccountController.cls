public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsList(){
        return [SELECT Id, Name FROM Account];
    }
}
