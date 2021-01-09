const {clipboard} = require('electron')

const copyBtn = document.getElementById('copy-to')
const copyInput = document.getElementById('copy-to-input')

copyBtn.addEventListener('click', () => {
  if (copyInput.value !== '') copyInput.value = ''
  copyInput.placeholder = '已复制，请粘贴到此处'
  clipboard.writeText('Electron Demo!')
})
