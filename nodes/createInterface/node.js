output = function() {

  var iface = readline.createInterface({
    input: $.input,
    output: $.output,
    terminal: $.terminal || undefined
  });

  iface.on('line', function(line) {
    cb({ line: line });
  });

  iface.on('pause', function() { cb({ pause: '' }); });
  iface.on('resume', function() { cb({ resume: '' }); });
  iface.on('close', function() { cb({ close: '' }); });
  iface.on('SIGINT', function() { cb({ SIGINT: '' }); });
  iface.on('SIGTSTP', function() { cb({ SIGTSTP: '' }); });
  iface.on('SIGCONT', function() { cb({ SIGCONT: '' }); });

  cb({
    readline: iface
  });

};
