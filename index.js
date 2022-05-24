const titles = document.querySelectorAll('[data-feature-title]')
const images = document.querySelectorAll('[data-feature-image]')
const titlesArray = Array.from(titles)

document.addEventListener('scroll', () => {
  const activeElement = titlesArray.find(el => {
    const rect = el.getBoundingClientRect()
    return rect.top > 250 && rect.top < 600
  })

  if (activeElement === undefined) {
    if (titlesArray[titlesArray.length - 1].getBoundingClientRect().top < 300) {
      setActive(titlesArray[titlesArray.length - 1].dataset.featureTitle)
    } else {
      setActive(titlesArray[0].dataset.featureTitle)
    }
  } else {
    setActive(activeElement.dataset.featureTitle)
  }
})

let prevActive

const setActive = active => {
  if (prevActive !== active) {
    const switchSound = new Audio('./audio/blurp.mp3')
    switchSound.play().catch(() => {
      console.log('autoplay prevented')
    })
  }

  titles.forEach(el => {
    if (el.dataset.featureTitle === active) {
      el.classList.add('active')
    } else {
      el.classList.remove('active')
    }
  })
  images.forEach(el => {
    if (el.dataset.featureImage === active) {
      el.classList.add('active')
    } else {
      el.classList.remove('active')
    }
  })
  prevActive = active
}
