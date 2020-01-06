//Module_parse_NoContent_ThrowsErrorNoContent.js: Testing logic.

define([
	"parse"
], function(
	parse
) {
	return {
		"Name":"Module_parse_NoContent_ThrowsErrorNoContent",
		"Input": {
			"Options": "define();",
			"Object": {
				"Headers": undefined,
				"Dependencies": undefined,
				"Exports": undefined,
				"Content": undefined
			}
		},
		"Function": function( Input ) {
			return parse.call( Input.Object, Input.Options );
		},
		"ExceptionTest": true,
		"ExpectedOutput": { "message": "Error: The define statement has no content." },
		"Debug": false
	};
});
