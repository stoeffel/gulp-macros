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
task 'default' {
  @ ['test.js'], { read: false };
  | mocha(mochaConfig);
}

task 'watch' {
  watch 'test.js', ['default'];
}
```

CLI
---

```bash
  $ gulps [task]
```
