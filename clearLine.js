module.exports = {
  name: "clearLine",
  ns: "readline",
  title: "Clear Line",
  description: "Clears current line of given TTY stream in a specified direction",
  phrases: {
    active: "Clearing line"
  },
  ports: {
    input: {
      readline: {
        title: "Readline",
        type: "Interface"
      },
      dir: {
        title: "Direction",
        "enum": ["left",
          "right",
          "all"
        ],
        "default": "all"
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
  fn: function clearLine(input, output, state, done, cb, on, readline) {
    var r = function() {
      var dir = {
        left: -1,
        right: 1,
        all: 0
      };
      readline.clearLine(input.readline, dir[input.dir]);
      output.readline = input.readline;
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}