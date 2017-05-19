/*
 * grunt-keyword-extractor
 * https://github.com/andrewbridge/grunt-keyword-extractor
 *
 * Copyright (c) 2017 Andrew Bridge
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var keywordExtractor = require('keyword-extractor');
  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('keyword_extractor', 'A grunt task for mikedelorenzo\'s keyword-extractor NPM package.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      language:"english",
      remove_digits: true,
      return_changed_case:true,
      remove_duplicates: false,
      flatten: false,
      generateSeparates: false,
      ext: true
    });

    var combinedResult = {};

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      var fileOpts = {flatten: options.flatten};
      var dest = (options.generateSeparates) ? f.dest : '';
      if (!options.ext) {
        fileOpts.ext = '';
      }
      grunt.file.expandMapping(f.src, dest, fileOpts).forEach(function(filePath) {
        var src = filePath.src[0], content, result;

        grunt.log.writeln(filePath.dest);
        if (grunt.file.isFile(src)) {
          content = grunt.file.read(src);
          result = keywordExtractor.extract(content, options)

          if (options.generateSeparates) {
            grunt.file.write(filePath.dest+".json", JSON.stringify(result));
            return true;
          }
          combinedResult[filePath.dest] = result
        }
      });
      if (!options.generateSeparates) {
        grunt.file.write(f.dest, JSON.stringify(combinedResult));
      }
    });
  });

};
