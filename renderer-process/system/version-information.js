const versionInfoBtn = document.getElementById('version-info')

const electronVersion = process.versions.electron

versionInfoBtn.addEventListener('click', () => {
  const message = `Electron版本: ${electronVersion}`
  document.getElementById('got-version-info').innerHTML = message
})
