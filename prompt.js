module.exports = {
  name: "prompt",
  ns: "readline",
  title: "Prompt",
  description: "Readies readline for input from the user, putting the current setPrompt options on a new line, giving the user a new spot to write. Set preserveCursor to true to prevent the cursor placement being reset to 0.\n This will also resume the input stream used with createInterface if it has been paused. ",
  phrases: {
    active: "Prompting"
  },
  ports: {
    input: {
      readline: {
        title: "Readline",
        type: "Interface"
      },
      preserveCursor: {
        title: "Preserve Cursor",
        type: "boolean",
        "default": false
      }
    },
    output: {
      readline: {
        title: "Readline",
        type: "Interface"
      }
    }
  },
  fn: function prompt(input, $, output, state, done, cb, on) {
    var r = function() {
      $.readline.prompt($.preserveCursor || undefined);
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