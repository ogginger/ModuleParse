//test_Module.parse.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "parse",
  "tests/Module_parse_Input_ReturnsState",
  "tests/Module_parse_hasHeader_ReturnsStateWithHeader"
], function(
  TestSuite,
  log,
  parse,
  Module_parse_Input_ReturnState,
  Module_parse_hasHeader_ReturnsStateWithHeader
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_Module.parse initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "Module.parse" );
 
	//xTestSuite.add( Module_parse_Input_ReturnState );           
	xTestSuite.add( Module_parse_hasHeader_ReturnsStateWithHeader );
      xTestSuite.test();
    }
  });
});
