#!/bin/bash

macro="$PWD/node_modules/gulp-macros.sjs"

if [ -f "$macro" ]; then
  macro="$PWD/node_modules/gulp-macros/gulp-macros.sjs"
else
  macro="$PWD/gulp-macros.sjs"
fi

sjs --module $macro ${PWD}/gulpfile.sjs > ${PWD}/gulpfile.js

gulp $@

rm ./gulpfile.js
