module.exports = {
  name: "createInterface",
  ns: "readline",
  title: "Create Interface",
  description: "Creates a readline Interface instance",
  phrases: {
    active: "Creating interface"
  },
  ports: {
    input: {
      input: {
        title: "Input Stream",
        type: "Stream"
      },
      output: {
        title: "Output Stream",
        type: "Stream"
      },
      terminal: {
        title: "Terminal",
        type: "boolean",
        "default": null
      }
    },
    output: {
      readline: {
        title: "Readline",
        type: "Interface"
      },
      line: {
        title: "Line",
        type: "any"
      },
      pause: {
        title: "Pause",
        type: "any"
      },
      resume: {
        title: "Resume",
        type: "any"
      },
      close: {
        title: "Close",
        type: "any"
      },
      SIGINT: {
        title: "SIGINT",
        type: "any"
      },
      SIGTSTP: {
        title: "SIGTSTP",
        type: "any"
      },
      SIGCONT: {
        title: "SIGCONT",
        type: "any"
      }
    }
  },
  dependencies: {
    npm: {
      readline: require('readline')
    }
  },
  fn: function createInterface(input, $, output, state, done, cb, on, readline) {
    var r = function() {
      var iface = readline.createInterface({
        input: $.input,
        output: $.output,
        terminal: $.terminal || undefined
      });

      iface.on('line', function(line) {
        output({
          line: $.create(line)
        });
      });

      iface.on('pause', function() {
        output({
          pause: ''
        });
      });
      iface.on('resume', function() {
        output({
          resume: ''
        });
      });
      iface.on('close', function() {
        output({
          close: ''
        });
      });
      iface.on('SIGINT', function() {
        output({
          SIGINT: ''
        });
      });
      iface.on('SIGTSTP', function() {
        output({
          SIGTSTP: ''
        });
      });
      iface.on('SIGCONT', function() {
        output({
          SIGCONT: ''
        });
      });

      output({
        readline: $.create(iface)
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}