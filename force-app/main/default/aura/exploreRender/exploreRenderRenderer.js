({
    render : function(cmp, helper){
        var ret = this.superRender();
        // do custom rendering here
        return ret;
    },
    
    rerender : function(cmp, helper){
        this.superRerender();
    	// do custom rerendering here
    },
 
 	afterrender : function(cmp, helper){
        this.superAfterRender();
    	// interact with the DOM here
    },

    unrender : function(cmp, helper){
        this.superUnrender();
    	// do custom unrendering here
    }
	
})