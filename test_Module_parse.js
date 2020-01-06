//test_Module.parse.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "parse",
  "tests/Module_parse_NoDefine_ThrowsErrorNoDefine",
  "tests/Module_parse_NotString_ThrowsErrorNotString",
  "tests/Module_parse_NotValidModule_ThrowsErrorNotValidModule",
  "tests/Module_parse_NoContent_ThrowsErrorNoContent",
  "tests/Module_parse_onlyContent_ReturnsStateWithContent",
  "tests/Module_parse_hasName_ReturnsStateWithName",
  "tests/Module_parse_hasHeader_ReturnsStateWithHeader",
  "tests/Module_parse_hasDependencies_ReturnsStateWithDependencies",
  "tests/Module_parse_hasExports_ReturnsStateWithExports",
  "tests/Module_parse_hasAll_ReturnsStateWithAll"
], function(
  TestSuite,
  log,
  parse,
  Module_parse_NoDefine_ThrowsErrorNoDefine,
  Module_parse_NotString_ThrowsErrorNotString,
  Module_parse_NotValidModule_ThrowsErrorNotValidModule,
  Module_parse_NoContent_ThrowsErrorNoContent,
  Module_parse_onlyContent_ReturnsStateWithContent,
  Module_parse_hasName_ReturnsStateWithName,
  Module_parse_hasHeader_ReturnsStateWithHeader,
  Module_parse_hasDependencies_ReturnsStateWithDependencies,
  Module_parse_hasExports_ReturnsStateWithExports,
  Module_parse_hasAll_ReturnsStateWithAll
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_Module.parse initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "Module.parse" );
 
      xTestSuite.add( Module_parse_NoDefine_ThrowsErrorNoDefine );
      xTestSuite.add( Module_parse_NotValidModule_ThrowsErrorNotValidModule );
      xTestSuite.add( Module_parse_NotString_ThrowsErrorNotString );
      xTestSuite.add( Module_parse_NoContent_ThrowsErrorNoContent );
      xTestSuite.add( Module_parse_hasName_ReturnsStateWithName );           
      xTestSuite.add( Module_parse_hasHeader_ReturnsStateWithHeader );
      xTestSuite.add( Module_parse_onlyContent_ReturnsStateWithContent );
      xTestSuite.add( Module_parse_hasDependencies_ReturnsStateWithDependencies );
      xTestSuite.add( Module_parse_hasExports_ReturnsStateWithExports );
      xTestSuite.add( Module_parse_hasAll_ReturnsStateWithAll );

      xTestSuite.test();
    }
  });
});
