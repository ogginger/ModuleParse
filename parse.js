//Module.parse.js: Functional Logic.

define([
	"validate",
	"parseValidation"
], function(
	validate,
	parseValidation
) {
  return function( Input ) {
	validate({
		"Validation": parseValidation,
		"Data": Input
	});	

	return false;
  };
});
