define([], function() {
    return [
        function( Input ) {
            if ( typeof Input != "string" ) {
                throw {  message: "Input type of parse was not string." };
            } else if ( Input.match(/^define(.);*\s$/) == null ) {
                throw { message: "Module did not contain a valid define statement." }
            } else {
                console.log("here");
            }
        }
    ];
});