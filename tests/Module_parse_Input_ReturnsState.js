//Module_parse_Input_ReturnsState.js: Testing logic.

define([
	"parse"
], function(
	parse
) {
	return {
		"Name":"Module_parse_Input_ReturnsState",
		"Input": {
			"Input":"define([],function() {});",
			"Module": {
				"Headers": undefined,
				"Dependencies": undefined,
				"Exports": undefined,
				"Functionality": undefined
			} 
		},
		"Function": function( Input ) {
			return parse.call( Input.Module, Input.Input );
		},
		"ExpectedOutput": {
			"Dependencies": [],
			"Exports": [],
			"Functionality": ""
		},
		"Debug": true,
		"Comparator": { "Object": true }
	};
});
