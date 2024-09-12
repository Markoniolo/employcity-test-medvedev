const header = document.querySelector('[data-element="header"]')

if (header) headerInit()

function headerInit () {
  const layer = document.querySelector('[data-element="header-layer"]')
  const burger = document.querySelector('[data-element="header-burger"]')

  burger.addEventListener('click', toggleHeader)
  layer.addEventListener('click', closeHeader)

  function toggleHeader () {
    if (header.classList.contains('header_mobile-active')) {
      closeHeader()
    } else {
      header.classList.add('header_mobile-active')
      layer.classList.add('header-layer_active')
    }
  }

  function closeHeader () {
    header.classList.remove('header_mobile-active')
    layer.classList.remove('header-layer_active')
  }
}
