
function error_process(err, error_callback) {
  if (err && error_callback)
    error_callback(err);
}

