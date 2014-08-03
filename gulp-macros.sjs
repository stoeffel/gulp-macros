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

export task 
export @
export | 
