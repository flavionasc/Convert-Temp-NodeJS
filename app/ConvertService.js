var ConvertService = {

	getIndex: function(celsius) {
		if(typeof(celsius) === 'number') {
			return ((celcius * 1.8) +  32);
		}
		return null;
	},
	
	getDescription: function (index) {
		//TODO to be implemented
		return "";
	}
	
};

module.exports = ConvertService;