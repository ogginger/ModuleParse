//Module_parse_hasAll_ReturnsStateWithAll.js: Testing logic.

define([
	"parse"
], function(
	parse
) {
	return {
		"Name":"Module_parse_hasAll_ReturnsStateWithAll",
		"Input": {
			"Options": "//test.js: this is a test.\ndefine('name', [ 'dep' ], function( dep ) { return dep; });",
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
			"Headers": "//test.js: this is a test.\n",
			"Name": "name",
			"Dependencies": [ "dep" ],
			"Exports": [ "dep" ],
			"Content": "function( dep ) { return dep; }"
		},
		"Comparator": {
			"Object": true
		},
		"Debug": false
	};
});
