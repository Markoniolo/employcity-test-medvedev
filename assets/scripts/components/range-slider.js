import rangesliderJs from 'rangeslider-js'

const rangeSliders = document.querySelectorAll('[data-role="range-slider"]')

for (let i = 0; i < rangeSliders.length; i++) {
  const rangeslider = rangesliderJs.create(rangeSliders[i], {
    onSlide: function (value) {
      const target = rangeSliders[i].getAttribute('data-target')
      if (target) {
        document.querySelector(`.${target}`).innerHTML = `${value} %`
      }
    }
  })
}
