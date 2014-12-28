module.exports = {
  name: "resume",
  ns: "readline",
  title: "Resume",
  description: "Resumes the readline input stream",
  phrases: {
    active: "Resuming"
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
  fn: function resume(input, output, state, done, cb, on) {
    var r = function() {
      input.readline.resume();
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