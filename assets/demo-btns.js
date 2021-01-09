const settings = require('electron-settings')

$('.js-container-target').on('click', function () {
  const parent = $(this).parent()
  parent.toggleClass('is-open')
  if (parent.hasClass('is-open')) {
    settings.set('activeDemoButtonId', $(this).attr('id'))
  } else {
    settings.delete('activeDemoButtonId')
  }
})

// Default to the demo that was active the last time the app was open
// const buttonId = settings.get('activeDemoButtonId')
// console.log(buttonId, '-----buttonId-----')
// if (buttonId) {
//   document.getElementById(buttonId).click()
// }
