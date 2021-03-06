//Module_parse_hasName_ReturnsStateWithName.js: Testing logic.

define([
	"parse"
], function(
	parse
) {
	return {
		"Name":"Module_parse_hasName_ReturnsStateWithName",
		"Input": {
			"Options":"define('name', function() {});",
			"Object": {
				"Header": undefined,
				"Name": undefined,
				"Dependencies": undefined,
				"Exports": undefined,
				"Content": undefined
			} 
		},
		"Function": function( Input ) {
			return parse.call( Input.Object, Input.Options );
		},
		"ExpectedOutput": {
			"Header": '',
			"Name": "name",
			"Dependencies": undefined,
			"Exports": undefined,
			"Content": "function() {}"
		},
		"Debug": false,
		"Comparator": { "Object": true }
	};
});
