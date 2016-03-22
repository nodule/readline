module.exports = {
  name: "question",
  ns: "readline",
  title: "Question",
  description: "Prompt with a question",
  phrases: {
    active: "Questioning"
  },
  ports: {
    input: {
      readline: {
        title: "Readline",
        type: "Interface"
      },
      query: {
        title: "Query",
        type: "string"
      }
    },
    output: {
      answer: {
        title: "Answer",
        type: "string"
      }
    }
  },
  fn: function question(input, $, output, state, done, cb, on) {
    var r = function() {
      $.readline.question($.query, function questionCallback(answer) {
        cb({
          answer: answer
        });
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