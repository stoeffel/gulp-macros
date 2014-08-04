module.exports = {
  task : function(name, cb) {
    this.taskName = name;
    this.cb = cb;
    return this;
  },
  
  clearSteps: function() {
    this.countSteps = 0;
  },

  pipe : function(cb) {
    this.countSteps = this.countSteps + 1;
    if (typeof cb === 'function') {
      cb();
    }
    return this;
  },
  src : function(srcPath) {
    this.srcPath = srcPath;
    return this;
  },
  dest : function(destPath) {
    this.destPath = destPath;
    return this;
  }
};
