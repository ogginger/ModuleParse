//Module_parse_hasDependencies_ReturnsStateWithDependencies.js: Testing logic.

define([
	"parse"
], function(
	parse
) {
	return {
		"Name":"Module_parse_hasDependencies_ReturnsStateWithDependencies",
		"Input": {
			"Options": "define([ 'dep' ], function() {});",
			"Object": {
				"Headers": undefined,
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
			"Headers": '',
			"Name": undefined,
			"Dependencies": [ "dep" ],
			"Exports": undefined,
			"Content": "function() {}"
		},
		"Comparator": { "Object": true },
		"Debug": false
	};
});
