const settings = require('electron-settings')
// todo settings如何设置的
// console.log(settings, '-----settings-----')

/**
 * 页面点击全局监听，切换显示路由
 */
$('body').click(({ target }) => {
  const { dataset: { section, modal }, classList } = target

  if (modal) { // 显示about
    $('.modal.is-shown').removeClass('is-shown')
    $(`#${modal}-modal`).addClass('is-shown')
  } else if (classList.contains('modal-hide')) {
    $('.modal.is-shown').removeClass('is-shown')
  } else if (section) { // 显示其他页面
    $('.js-section.is-shown').removeClass('is-shown')
    $('.nav-button.is-selected').removeClass('is-selected')
    $(target).addClass('is-selected')
    const id = `${section}-section`
    settings.set('activeSectionButtonId', id)
    $(`#${id}`).addClass('is-shown')
  }
})

// Default to the view that was active the last time the app was open
const sectionId = settings.get('activeSectionButtonId')
// todo 是否默认第一个activeSectionButtonId
// console.log(sectionId, '-----sectionId-----')
$('#about-modal').addClass('is-shown')
if (sectionId) {
  $('.js-nav').addClass('is-shown')
  $('.js-content').addClass('is-shown')
  $(`#${sectionId}`).click()
  $('#button-windows').click()
} else {
  $('#button-windows').click()
}
