var ConvertService = {

      getIndex : function(celsius,callback){
      
          $.ajax({
              url: 'ConvertController',
              data: {'celsius':celsius},
              success : function(result) {
                  callback(parseFloat(result));
              },
              error : function(){
                  callback(null);
              }
          });
      },
          getDescription: function (index) {
          
              return "";
          }
};