module.exports = {
  name: "pause",
  ns: "readline",
  title: "Pause",
  description: "Pauses the readline input stream, allowing it to be resumed later if needed.",
  phrases: {
    active: "Pausing"
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
  fn: function pause(input, output, state, done, cb, on) {
    var r = function() {
      input.readline.pause();
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