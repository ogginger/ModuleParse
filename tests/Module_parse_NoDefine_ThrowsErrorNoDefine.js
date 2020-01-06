//Module_parse_NoDefine_ThrowsErrorNoDefine.js: Testing logic.

define([
	"parse"
], function(
	parse
) {
	return {
		"Name":"Module_parse_NoDefine_ThrowsErrorNoDefine",
		"Input": {
			"Options": "This is not a define statement.",
			"Object": {}
		},
		"Function": function( Input ) {
			return parse.call( Input.Object, Input.Options );
		},
		"ExceptionTest": true,
		"ExpectedOutput": {
			message: "Error: Module does not contain a valid define statement."
		},
		"Debug": false
	};
});
