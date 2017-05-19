/*
 * grunt-keyword-extractor
 * https://github.com/andrewbridge/grunt-keyword-extractor
 *
 * Copyright (c) 2017 Andrew Bridge
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    keyword_extractor: {
      simple: {
        files: {
          'tmp/simple.json': ['test/data/obama']
        }
      },
      noDuplicates: {
        options: {
          remove_duplicates: true
        },
        files: {
          'tmp/noDuplicates.json': ['test/data/baggins']
        }
      },
      globstar: {
        files: {
          'tmp/globstar.json': ['test/data/**']
        }
      },
      flatGlobstar: {
        options: {
          flatten: true
        },
        files: {
          'tmp/flatGlobstar.json': ['test/data/**']
        }
      },
      separates: {
        options: {
          generateSeparates: true
        },
        files: {
          'tmp/separates': ['test/data/**']
        }
      },
      flatSeparates: {
        options: {
          generateSeparates: true,
          flatten: true
        },
        files: {
          'tmp/flatSeparates': ['test/data/**']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'keyword_extractor', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
