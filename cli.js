#!/bin/sh

sjs --module ${PWD}/gulp-macros.sjs ${PWD}/gulpfile.sjs > ${PWD}/gulpfile.js

gulp $@

rm ./gulpfile.js
