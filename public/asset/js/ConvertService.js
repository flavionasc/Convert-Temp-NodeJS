var ConvertService = {

	getIndex: function(celsius, callback) {
		$.ajax({
		  url: '/api/convert', //end-point to backend
		  data: {'celsius': celsius},
		  success: function(result) {
		  	callback(parseFloat(result));
		  },
		  error: function() {
		  	callback(null);
		  }
		});
	},
	
	getDescription: function (index) {
		//TODO to be implemented
		return "";
	}
	
};