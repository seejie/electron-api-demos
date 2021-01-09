const shell = require('electron').shell

$('a[href]').each(function () {
  const url = $(this).attr('href')
  if (!url.includes('http')) return
  $(this).on('click', e => {
    e.preventDefault()
    shell.openExternal(url)
  })
})
