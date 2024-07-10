

function openMobile (menu,openButton){
  openButton.addEventListener('click', () => {
    if (menu.classList.contains('show')) {
      menu.style.animationName = 'hide'
      setTimeout(() => {
        menu.classList.remove('show')
      }, 300)
    } else {
      menu.style.animationName = 'show'
      menu.classList.add('show')
    }
  })
}
function closeMobile (menu,openButton){
  window.addEventListener('click', function (e) {
    const { target } = e
    if (
      !menu.contains(target) &&
      !openButton.contains(target) &&
      menu.classList.contains('show')
    ) {
      menu.style.animationName = 'hide'
      setTimeout(() => {
        menu.classList.remove('show')
      }, 500)
    }
  })
}

document.addEventListener('astro:page-load',()=>{
const menu = document.getElementById('mobile__navbar')
const openButton = document.getElementById('openMobile')
  openMobile(menu,openButton)
  closeMobile(menu,openButton)
})







