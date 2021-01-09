// Import and add each page to the DOM
$('link[rel="import"]').each(function () {
  const template = $($(this)[0].import).find('.task-template')[0].content
  const clone = document.importNode(template, true)
  const selector = $(this).attr('href').includes('about.html') ? 'body' : '.content'
  $(selector).append(clone)
})
