//Module_parse_hasHeader_ReturnsStateWithHeader.js: Testing logic.

define([
	"parse"
], function(
	parse
) {
	return {
		"Name":"Module_parse_hasHeader_ReturnsStateWithHeader",
		"Input": {
			"Options": "//This is a header.\ndefine([], function() {});",
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
			"Header": "//This is a header.\n",
			"Name": undefined,
			"Dependencies": [],
			"Exports": [],
			"Content": function() {}
		},
		"Comparator": {
			"Object": true
		},
		"Debug": true
	};
});
