var input = ["dist"];

// gulp tasks

var config = {
  "dist": ["build", "deply"],
  "build": ["js", "css", "version-rev"],
  "js": ["lint", "uglify"],
  "css": ["sass", "css-min"]
};

var tasks = [];

getTasks(input);

function getTasks(input) {
  input.forEach(function(task) {
    if (config[task]) {
      getTasks(config[task]);
    } else {
      tasks.push(task);
    }
  });
}

console.log(tasks);
