const fs = require('fs')
const path = require('path')

$('code[data-path]').each(function () {
  const codePath = path.join(__dirname, '..', $(this).data('path'))
  const extension = path.extname(codePath)
  $(this).addClass(`language-${extension.substring(1)}`).text(fs.readFileSync(codePath))
})

$(document).ready(() =>{
  const highlight = require('highlight.js')
  $('pre code').each(function () {
    highlight.highlightBlock($(this)[0])
  })
})
