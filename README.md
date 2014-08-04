gulp-macros
===========

> sweetjs macros for gulp

Installation
------------

`npm install sweet.js`
`npm install sweet.js gulp-macros --save-dev`

Usage
-----

Create file `gulpfile.sjs`

```js
var gulp = require('gulp');

task 'task-name' {
  @ ['src-files'], config;
  | yourTask();
  | uglify();
  | minify();
  > 'build/js';
}

task 'watch' {
  watch '**/*.js', ['task-name'];
}
```

CLI
---

```bash
$ gulps [task]
$ gulps watch
$ gulps build
$ gulps
```
