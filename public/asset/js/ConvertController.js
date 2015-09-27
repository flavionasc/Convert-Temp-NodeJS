var ConvertController = {
    
    init: function(){
        
        ConvertController.setForm();
        
    },
    setForm: function(){
        
        var form = document.querySelector('form');
        form.addEventListener('submit',function(event){
            ConvertController.conversorTEMP(form);
            event.preventDefault();
        });
    },
    conversorTEMP: function(form){
        var
            celsius = parseFloat(form.celsius.value),
            result = 0;
            
        var callback = function(result){
            ConvertController.showResult(result);
    };
            
            ConvertController.showLoading(true);
            ConvertService.getIndex(celsius,callback);
        
    },
    showResult: function(result){
        
        var spanResult = document.querySelector('.result');
        spanResult.innerHTML = result.toFixed(2);
        ConvertController.showLoading(false);
    },
    
    showLoading: function(isLoading) {
		document.querySelector('.label').innerHTML = isLoading ? 'loading' : 'Result'
	}

};
//inicializaçao
ConvertController.init();
