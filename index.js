const elements = document.querySelectorAll('[data-feature-title]')
const elementsArray = Array.from(elements)

document.addEventListener('scroll', () => {
  const activeElement = elementsArray.find(el => {
    const rect = el.getBoundingClientRect()
    return rect.top > 250 && rect.top < 600
  })

  if (activeElement === undefined) {
    if (elementsArray[elementsArray.length - 1].getBoundingClientRect().top < 300) {
      setActive(elementsArray[elementsArray.length - 1].dataset.featureTitle)
    } else {
      setActive(elementsArray[0].dataset.featureTitle)
    }
  } else {
    setActive(activeElement.dataset.featureTitle)
  }
})

const setActive = active => {
  elements.forEach(el => {
    if (el.dataset.featureTitle === active) {
      el.classList.add('active')
    } else {
      el.classList.remove('active')
    }
  })
}
