let task = macro {
  case { $name $taskName { $body ... } } => {
    var gulp = makeIdent("gulp", #{$name});
    letstx $gulp = [gulp];
    return #{
      $gulp.task($taskName, function() {
		$body ...
      })
    }
  }

  case { $name $taskName $deps ... { $body ... } } => {
    var gulp = makeIdent("gulp", #{$name});
    letstx $gulp = [gulp];
    return #{
      $gulp.task($taskName, $deps ..., function() {
		$body ...
      })
    }
  }
}

let @ = macro {
  case { $name $src:expr, $config:expr; } => {
    var gulp = makeIdent("gulp", #{$name});
    letstx $gulp = [gulp];
    return #{
      return $gulp.src($src, $config)
    }
  }
  case { $name $src:expr; } => {
    var gulp = makeIdent("gulp", #{$name});
    letstx $gulp = [gulp];
    return #{
      return $gulp.src($src)
    }
  }
}

let | = macro {
  case { $name $step:expr; } => {
    return #{
      .pipe($step)
    }
  }
}

let > = macro {
  case { $name $out:expr; } => {
    var gulp = makeIdent("gulp", #{$name});
    letstx $gulp = [gulp];
    return #{
      .pipe($gulp.dest($out))
    }
  }
}

let watch = macro {
  case { $name $toWatch:expr, $tasks:expr ...; } => {
    var gulp = makeIdent("gulp", #{$name});
    letstx $gulp = [gulp];
    return #{
      return $gulp.watch($toWatch, $tasks ...)
    }
  }
}

export task 
export @
export | 
export > 
export watch 
