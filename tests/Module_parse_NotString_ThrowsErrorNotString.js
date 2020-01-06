//Module_parse_NotString_ThrowsErrorNotString.js: Testing logic.

define([
	"parse"
], function(
	parse
) {
	return {
		"Name":"Module_parse_NotString_ThrowsErrorNotString",
		"Input": {
			"Options": {},
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
		"ExceptionTest": true,
		"ExpectedOutput": { message: "Error: The input type was not string." },
		"Debug": false
	};
});
