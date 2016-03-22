module.exports = {
  name: "clearScreen",
  ns: "readline",
  title: "Clear Screen",
  description: "Clears the screen from the current position of the cursor down. ",
  phrases: {
    active: "Clearing screen"
  },
  ports: {
    input: {
      readline: {
        title: "Readline",
        type: "Interface"
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
  fn: function clearScreen(input, $, output, state, done, cb, on, readline) {
    var r = function() {
      readline.clearScreen($.readline);
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