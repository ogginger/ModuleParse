define([], function() {
    return [
        function( Input ) {
            if ( typeof Input.Options != "string" ) {
                throw {  message: "Error: The input type was not string." };
            } else if ( Input.Options.match(/^.*define\(.*\);\s*$/mgi) == null ) {
                throw { message: "Error: Module does not contain a valid define statement." }
            } else if (Input.Options.match(/^.*define\(.*({.*}|function\s*\(.*\)\s*{.*})\s*\);\s*$/mgi) == null ) {
                throw { message: "Error: The define statement has no content." }
            } else {
                return true;
            }
        }, function( Input ) {
            if (
                JSON.stringify( 
                    _.difference([
                      "Header", 
                      "Name", 
                      "Dependencies", 
                      "Exports", 
                      "Content" 
                    ],  Object.keys( Input.Object ))) !=
                  JSON.stringify([])
            ) {
                throw { message: "Error: The context was not a valid module." };
            } else {
                return true;
            }
        }
    ];
});