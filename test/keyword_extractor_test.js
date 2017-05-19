'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.keyword_extractor = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  simple: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/simple.json');
    var expected = grunt.file.read('test/expected/simple.json');
    test.equal(actual, expected, 'it should create a JSON file at the destination');

    test.done();
  },
  noDuplicates: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/noDuplicates.json');
    var expected = grunt.file.read('test/expected/noDuplicates.json');
    test.equal(actual, expected, 'it should remove duplicate keywords and create a JSON file at the destination');

    test.done();
  },
  globstar: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/globstar.json');
    var expected = grunt.file.read('test/expected/globstar.json');
    test.equal(actual, expected, 'it should create a JSON file at the destination using filepaths as keys');

    test.done();
  },
  flatGlobstar: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/flatGlobstar.json');
    var expected = grunt.file.read('test/expected/flatGlobstar.json');
    test.equal(actual, expected, 'it should create a JSON file at the destination using file names only as keys');

    test.done();
  },
  separates: function(test) {
    test.expect(1);

    var actual = [];
    var expected = [];

    actual.push(grunt.file.read('tmp/separates/test/data/obama.json'));
    expected.push(grunt.file.read('test/expected/separates/test/data/obama.json'));

    actual.push(grunt.file.read('tmp/separates/test/data/baggins.json'));
    expected.push(grunt.file.read('test/expected/separates/test/data/baggins.json'));

    actual.push(grunt.file.read('tmp/separates/test/data/subfolder/kenobi.json'));
    expected.push(grunt.file.read('test/expected/separates/test/data/subfolder/kenobi.json'));

    test.deepEqual(actual, expected, 'it should create a JSON file for each source file, maintaining directory hierarchy');

    test.done();
  },
  flatSeparates: function(test) {
    test.expect(1);

    var actual = [];
    var expected = [];

    actual.push(grunt.file.read('tmp/flatSeparates/obama.json'));
    expected.push(grunt.file.read('test/expected/flatSeparates/obama.json'));

    actual.push(grunt.file.read('tmp/flatSeparates/baggins.json'));
    expected.push(grunt.file.read('test/expected/flatSeparates/baggins.json'));

    actual.push(grunt.file.read('tmp/flatSeparates/kenobi.json'));
    expected.push(grunt.file.read('test/expected/flatSeparates/kenobi.json'));

    test.deepEqual(actual, expected, 'it should create a JSON file for each source file within the destination');

    test.done();
  },
};
