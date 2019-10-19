public with sharing class explorePaginationController {

    public explorePaginationController() {
    }

    @AuraEnabled(cacheable=true)
    public static Integer getAccountsCount(){
        
        return [SELECT COUNT() FROM Account];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(Integer offsetRange){
        if(offsetRange == null){
            return [SELECT Id, Name, Rating, Industry FROM Account LIMIT 3];

        }else{
            return [SELECT Id, Name, Rating, Industry FROM Account LIMIT 3 OFFSET :offsetRange];
        }
    }

}
