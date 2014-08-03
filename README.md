gulp-macros
===========

> sweetjs macros for gulp

Installation
------------

`npm install sweet.js`
`npm install sweet.js gulp-macros --save-dev`

Usage
-----

```js
task 'task-name' {
  @ ['src-files'], config;
  | yourTask();
  | uglify();
  | minify();
}

task 'watch' {
  watch '**/*.js', ['task-name'];
}
```

CLI
---

```bash
  $ gulps [task]
```
