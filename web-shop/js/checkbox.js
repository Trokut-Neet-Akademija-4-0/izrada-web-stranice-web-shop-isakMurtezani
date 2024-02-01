const maxChecks = 1
let selectedCount = 0

document.querySelector('.shop-container').addEventListener('click', event => {
  if (event.target.type === 'checkbox') {
    selectedCount = event.target.checked
      ? selectedCount + 1
      : selectedCount - 1
  }

  if (selectedCount >= maxChecks) {
    [...document.querySelectorAll('input:not(:checked)')].forEach(input => input.disabled = true)
  } else {
    [...document.querySelectorAll('input')].forEach(input => input.disabled = false)
  }
})