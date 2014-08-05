gulp-macros
===========

> sweetjs macros for gulp

Installation
------------

`npm install sweet.js gulp-macros -g`
`npm install gulp-macros --save-dev`

Usage
-----

Create file `gulpfile.sjs`

### Example 
```js
var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

task 'scripts' {
  @ ['js/**/*.coffee', '!client/external/**/*.coffee'];
    | sourcemaps.init();
    | coffee();
    | uglify();
    | concat('all.min.js');
    | sourcemaps.write();
      > 'build/js';
}

task 'watch' {
  watch '**/*.coffee', ['scripts'];
}

task 'default' ['watch', 'scripts'] { }
```

CLI
---

```bash
$ gulps [task]
$ gulps watch
$ gulps scripts
$ gulps
```
