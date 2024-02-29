const asideButton = document.getElementById('btn-aside-menu')
const asideContainer = document.getElementById('aside-container')
asideButton?.addEventListener('click', () => {
	asideContainer?.classList.toggle('hidden')
	asideContainer?.classList.toggle('absolute')
	asideContainer?.classList.toggle('z-20')
	asideContainer?.classList.toggle('col-span-3')
})