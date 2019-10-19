public with sharing class exploreAdvancedDataTable {
    public exploreAdvancedDataTable() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        return [SELECT Id, Name, LeadSource, Phone,Account.Name, Account.Industry FROM Contact];
    }
}
