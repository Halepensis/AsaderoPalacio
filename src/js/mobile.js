const menu = document.getElementById('mobile__navbar')
export function openMobile() {
    const openMobile = document.getElementById('openMobile')
    openMobile.addEventListener('click', () => {
      menu.style.display === 'flex'?
      menu.style.display = 'none':
      menu.style.display = 'flex'
    })}

export function closeMobile() {
    const closeMobile = document.getElementById('closeMobile')
    closeMobile.addEventListener('click', () => {
      menu.style.display = 'none'
    })}
