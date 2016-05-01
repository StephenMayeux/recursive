var input = ["dist"];

// gulp tasks

var config = {
  "dist": ["build", "deply"],
  "build": ["js", "css", "version-rev"],
  "js": ["lint", "uglify"],
  "css": ["sass", "css-min"]
};

var tasks = getTasks(config, input, []);

function getTasks(config, input, initial) {
  return input.reduce(function(prev, next) {
    if (config[next]) {
      return getTasks(config, config[next], prev);
    } else {
      return prev.concat(next);
    }
  }, initial); // can send in empty array on first iteration
}

console.log(tasks);
