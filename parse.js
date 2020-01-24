//Module.parse.js: Functional Logic.

define([
	"validate",
	"parseValidation"
], function(
	validate,
	parseValidation
) {
  return function( Input ) {
	var Module = this;

	validate({
		"Validation": parseValidation,
		"Data": {
			"Options": Input,
			"Object": Module
		}
	});	

	var match = new RegExp(/^([\s\S]*)(define|requirejs)\(([\s\S]*)\);\s*$/i).exec( Input );
	
	Module.Header = match[1];

	Module.Type = match[2];

	var parts = new RegExp(/^\s*('[a-zA-Z0-9_$]+'|"[a-zA-Z0-9_$]+")?,?\s*(\[["',a-zA-Z0-9_$\s]*\])?,?\s*([\s\S]+)\s*$/i)
	.exec( match[3] )
	.splice(1)
	.filter(function( part ) {
		return Boolean( part );
	});

	if ( parts.length == 1 ) {
		Module.Content = parts[0];
	} else if ( parts.length == 2 ) {
		Module.Content = parts[1];

		if (parts[0].match(/^\s*('.+'|".+")\s*$/)) {
		//if the first part starts and ends with a single or double quote then...
			//The first part of the define statement is the name.
			Module.Name = parts[0].replace( /'|"/g, '' );

		} else if (parts[0].match(/^\[[\s\S]*\]$/)) {
		//otherwise the first part did not start and end with a single or double quote so...
		//if the first part starts and ends with square brackets then...
			//The first part of the define statement is the dependencies.
			Module.Dependencies = JSON.parse(parts[0].replace( /'|"/g, '"' ));
			if (parts[1].match(/^function\(([a-zA-Z0-9_$\s,]+)\)\s*{[\s\S]*}$/i)) {
			//if the content contains a function with exports then...  
				Module.Exports = new RegExp(/^function\(([a-zA-Z0-9_$\s,]+)\)\s*[\s\S]+$/i)
				.exec( parts[1] )[1]
				.split(",")
				.map(function( _export ) {
					return new RegExp(/^\s*(\S+)\s*$/).exec( _export )[1];
				});
			}
		} else {
		//otherwise the first part neither started and ended with quotes or brackets so...
			throw { message: "The first argument of the define statement was not valid." };
		}
	} else if ( parts.length == 3 ) {
		Module.Name = parts[0].replace( /'|"/g, '' );
		Module.Dependencies = JSON.parse(parts[1].replace( /'|"/g, '"' ));
		Module.Content = parts[2];

		if (parts[2].match(/^function\(([\s\S]+)\)\s*{[\s\S]*}$/i)) {
		//if the content contains a function with exports then...                                                                                                                                                             a function with exports then...
			Module.Exports = new RegExp(/^function\(([\s\S]+)\)\s*{[\s\S]*}$/i)
			.exec( parts[2] )[1]
			.split(",")
			.map(function( _export ) {
				return new RegExp(/^\s*(\S+)\s*$/).exec( _export )[1];
			});
		}
	} else {
		throw { message: "Error: Invalid number of define arguments." };
	}
	return Module;
  };
});
