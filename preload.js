// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }

  // https://www.electronjs.org/docs/api/frameless-window#draggable-region
  const div = document.getElementById('drag')
  div.style.height = '34px'
  // div.style.webkitAppRegion = 'drag'
  // div.style.webkitUserSelect = 'none'
})
