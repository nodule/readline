module.exports = {
  name: "write",
  ns: "readline",
  title: "Write",
  async: true,
  description: "Writes data to output stream.",
  phrases: {
    active: "Writing"
  },
  ports: {
    input: {
      readline: {
        title: "Readline",
        type: "Interface"
      },
      data: {
        title: "Data",
        type: "any",
        async: true
      }
    },
    output: {
      readline: {
        title: "Readline",
        type: "Interface"
      }
    }
  }
}