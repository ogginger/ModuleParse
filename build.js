//build.js: Configuration file for optimizing the ifSetup function. 
/*
    Dependencies:
        1. Underscore.js
*/ 
({
    paths: {
        "validate": "lib/validate.min",
        "underscore": "lib/underscore.min"
    },
    exclude: [ "underscore" ],
    name: "parse",
    out: "module_parse.min.js"
})
