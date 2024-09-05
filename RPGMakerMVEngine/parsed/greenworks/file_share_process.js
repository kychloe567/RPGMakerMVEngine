// It processes remains steps after saving files to Steam Cloud.
function file_share_process(file_name, image_name, next_process_func,
    error_callback, progress_callback) {
  if (progress_callback)
    progress_callback("Completed on saving files on Steam Cloud.");
  greenworks.fileShare(file_name, function() {
    greenworks.fileShare(image_name, function() {
      next_process_func();
    }, function(err) { error_process(err, error_callback); });
  }, function(err) { error_process(err, error_callback); });
}

