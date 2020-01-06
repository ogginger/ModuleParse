//Module_parse_NotValidModule_ThrowsErrorNotValidModule.js: Testing logic.

define([
	"parse"
], function(
	parse
) {
	return {
		"Name":"Module_parse_NotValidModule_ThrowsErrorNotValidModule",
		"Input": {
			"Options": "define([], function() {});",
			"Object": {
				"Property": "This is not a valid module."
			}
		},
		"Function": function( Input ) {
			return parse.call( Input.Object, Input.Options );
		},
		"ExceptionTest": true,
		"ExpectedOutput": { message: "Error: The context was not a valid module." },
		"Debug": false
	};
});
