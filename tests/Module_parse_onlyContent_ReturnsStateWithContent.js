//Module_parse_onlyContent_ReturnsStateWithContents.js: Testing logic.

define([
	"parse"
], function(
	parse
) {
	return {
		"Name":"Module_parse_onlyContent_ReturnsStateWithContents",
		"Input": {
			"Options": "define(function() {});",
			"Object": {
				"Header": undefined,
				"Name": undefined,
				"Dependencies": undefined,
				"Exports": undefined,
				"Content": undefined
			}
		},
		"Function": function( Input ) {
			return parse.call( Input.Object, Input.Options )
		},
		"ExpectedOutput": {
			"Header": "",
			"Name": undefined,
			"Dependencies": undefined,
			"Exports": undefined,
			"Content": "function() {}"
		},
		"Comparator": {
			"Object": true
		},
		"Debug": false
	};
});
