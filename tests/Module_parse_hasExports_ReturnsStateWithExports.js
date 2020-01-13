//Module_parse_hasExports_ReturnsStateWithExports.js: Testing logic.

define([
	"parse"
], function(
	parse
) {
	return {
		"Name":"Module_parse_hasExports_ReturnsStateWithExports",
		"Input": {
			"Options": "define([ 'dep' ], function( dep ) {});",
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
			"Name": undefined,
			"Dependencies": [ "dep" ],
			"Exports": [ "dep" ],
			"Content": "function( dep ) {}"
		},
		"Comparator": {
			"Object": true
		},
		"Debug": false
	};
});
