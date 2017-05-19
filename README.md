# grunt-keyword-extractor

> A grunt task for mikedelorenzo's keyword-extractor NPM package.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-keyword-extractor --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-keyword-extractor');
```

## The "keyword_extractor" task

### Overview
In your project's Gruntfile, add a section named `keyword_extractor` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  keyword_extractor: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.language
Type: `String`
Default value: `'english'`

Passed to keyword-extractor. See its [Options Parameters table](https://www.npmjs.com/package/keyword-extractor#options-parameters) for more.

#### options.remove_digits
Type: `Boolean`
Default value: `true`

Passed to keyword-extractor. See its [Options Parameters table](https://www.npmjs.com/package/keyword-extractor#options-parameters) for more.

#### options.return_changed_case
Type: `Boolean`
Default value: `true`

Passed to keyword-extractor. See its [Options Parameters table](https://www.npmjs.com/package/keyword-extractor#options-parameters) for more.

#### options.remove_duplicates
Type: `Boolean`
Default value: `false`

Passed to keyword-extractor. See its [Options Parameters table](https://www.npmjs.com/package/keyword-extractor#options-parameters) for more.

#### options.flatten
Type: `Boolean`
Default value: `false`

If `options.generateSeparates` is `true`, `options.flatten` will:

* remove all folder hierarchy if `true`. JSON files will be placed in the `dest` path
* retain folder hierarchy if `false`. JSON files in subdirectories will remain in a subdirectory within the `dest` path

If `options.generateSeparates` is `false`, `options.flatten` will:

* use only the file name for the object key if `true`
* use the full file path for the object key if `false`

#### options.generateSeparates
Type: `Boolean`
Default value: `false`

If `true`, a separate JSON file for each source file will be created in the `dest` path.

If `false`, a single JSON file will be created, with all keywords from the sources files, at the `dest` path.

#### options.ext
Type: `Boolean`
Default value: `true`

If `true`, a the file's extension will be included in file names and object keys. If `false`, all file extensions will be removed.

### Usage Examples

#### Default Options
If the contents of `data/obama` is:

> President Obama woke up Monday facing a Congressional defeat that many in both parties believed could hobble his presidency.

Simple usage is:

```js
grunt.initConfig({
  keyword_extractor: {
      main: {
        files: {
          'keywords.json': ['data/obama']
        }
      }
    }
  },
});
```

`keywords.json` would contain:

```
{"data/obama":["president","obama","woke","monday","facing","congressional","defeat","parties","believed","hobble","presidency"]}
```

#### Separates and custom options
Using the same content for 'data/obama'.

```js
grunt.initConfig({
  keyword_extractor: {
    separates: {
      options: {
        generateSeparates: true,
        ext: false
      },
      files: {
        'keywords': ['data/**']
      }
    }
  },
});
```

`keywords/data/obama.json` would contain:

```
["president","obama","woke","monday","facing","congressional","defeat","parties","believed","hobble","presidency"]
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
2017-05-20  v0.1.0  Initial write and publish.
