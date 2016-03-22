module.exports = {
  name: "cursorTo",
  ns: "readline",
  title: "Cursor To",
  description: "Move cursor to the specified position in a given TTY stream.",
  phrases: {
    active: "Moving cursor to {{input.x}}:{{input.y}}"
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
  fn: function cursorTo(input, $, output, state, done, cb, on, readline) {
    var r = function() {
      readline.cursorTo($.readline, $.x, $.y);
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