module.exports = {
  name: "moveCursor",
  ns: "readline",
  title: "Move Cursor",
  description: "Move cursor relative to it's current position in a given TTY stream. ",
  phrases: {
    active: "Moving cursor {{input.x}}:{{input.y}}"
  },
  ports: {
    input: {
      readline: {
        title: "Readline",
        type: "Interface"
      },
      x: {
        title: "X Position",
        type: "number"
      },
      y: {
        title: "Y Position",
        type: "number"
      }
    },
    output: {
      readline: {
        title: "Readline",
        type: "Interface"
      }
    }
  },
  dependencies: {
    npm: {
      readline: require('readline')
    }
  },
  fn: function moveCursor(input, $, output, state, done, cb, on, readline) {
    var r = function() {
      readline.moveCursor($.readline, $.x, $.y);
      output.readline = $.get('readline');
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}