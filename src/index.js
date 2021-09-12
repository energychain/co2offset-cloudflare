import css from "./styles.css"

function init() {
  if (!window.addEventListener) return // Check for IE9+

  let options = INSTALL_OPTIONS
  let element

  function updateElement() {
    element = INSTALL.createElement(options.location, element)
    element.setAttribute("app", "co2offset")
    const originalURL = window.location
    let html = `<a style="text-decoration:none" target"_blank" href="https://co2offset.io/host.html?host=${
      originalURL.host
    }">`
    html += `<img src="https://api.corrently.io/v2.0/ghgmanage/statusimg?host=${
      originalURL.host
    }" style="margin-right:5px"/>`
    html += "CO<sub>2</sub>offset"
    html += "</a>"
    element.innerHTML = html
  }

  window.INSTALL_SCOPE = {
    setOptions(nextOptions) {
      options = nextOptions
      updateElement()
    },
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement)
  } else {
    updateElement()
  }
}

init()
