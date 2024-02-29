const asideButton = document.getElementById('btn-aside-menu')
const asideContainer = document.getElementById('aside-container')
console.log('esta')
asideButton?.addEventListener('click', () => {
	asideContainer?.classList.toggle('hidden')
	asideContainer?.classList.toggle('absolute')
	asideContainer?.classList.toggle('z-20')
	asideContainer?.classList.toggle('col-span-3')
	console.log('aca')
})

window.addEventListener('resize', () => {
	if (window.innerWidth < 1024) {
		asideContainer?.classList.add('hidden')
		asideContainer?.classList.remove('absolute')
		asideContainer?.classList.remove('z-20')
		asideContainer?.classList.remove('col-span-3')
	}
})