var fs = require('fs');

exports.modules = {};
fs.readdirSync(__dirname + '/lib/modules').forEach(function(filename) {
	if (/\.js$/.test(filename)) {
		var name = filename.substr(0, filename.lastIndexOf('.'));
		var _module = require('./lib/modules/' + name);
		if (!_module.moduleError) {
			exports.modules.__defineGetter__(name, function() {
				return _module;
			});
		}
	}
});