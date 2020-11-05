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
  div.style.height = '200px'
  div.style.position = 'absolute'
  div.style.top = '0px'
  div.style.left = '0px'
  div.style.right = '0px'
  div.style.webkitAppRegion = 'drag'
  div.style.webkitUserpointSelect = 'none'
  div.style.pointerEvents = 'none'
})
