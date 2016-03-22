module.exports = {
  name: "setPrompt",
  ns: "readline",
  title: "Set Prompt",
  description: "Sets the prompt",
  phrases: {
    active: "Setting prompt"
  },
  ports: {
    input: {
      readline: {
        title: "Readline",
        type: "Interface"
      },
      prompt: {
        title: "Prompt",
        type: "string"
      },
      length: {
        title: "Length",
        type: "number",
        "default": null
      }
    },
    output: {
      readline: {
        title: "Readline",
        type: "Interface"
      }
    }
  },
  fn: function setPrompt(input, $, output, state, done, cb, on) {
    var r = function() {
      $.readline.setPrompt(
        $.prompt,
        $.length || undefined
      );

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