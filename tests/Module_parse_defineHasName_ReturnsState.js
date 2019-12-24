//Module_parse_Input_ReturnsState.js: Testing logic.

define([
	"parse"
], function(
	parse
) {
	return {
		"Name":"Module_parse_Input_ReturnsState",
		"Input": {
			"Input":"define('name',[],function() {});",
			"Module": {
				"Headers": undefined,
				"Name": undefined,
				"Dependencies": undefined,
				"Exports": undefined,
				"Functionality": undefined
			} 
		},
		"Function": function( Input ) {
			return parse.call( Input.Module, Input.Input );
		},
		"ExpectedOutput": {
			"Name": "name",
			"Headers": "",
			"Dependencies": [],
			"Exports": [],
			"Functionality": "function() {}"
		},
		"Debug": true,
		"Comparator": { "Object": true }
	};
});
