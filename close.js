module.exports = {
  name: "close",
  ns: "readline",
  title: "Close",
  description: "Closes the Interface instance, relinquishing control on the input and output streams.",
  phrases: {
    active: "Closing"
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
  fn: function close(input, $, output, state, done, cb, on) {
    var r = function() {
      $.readline.close();
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