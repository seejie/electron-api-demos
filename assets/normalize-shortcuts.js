const normalize = require('electron-shortcut-normalizer')
$('kbd.normalize-to-platform').each(function () {
  $(this).text(normalize($(this).text(), process.platform))
})
