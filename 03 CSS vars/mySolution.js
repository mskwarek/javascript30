const items = document.querySelectorAll('.controls input');
items.forEach( item => item.addEventListener('change', handleUpdate))
items.forEach( item => item.addEventListener('mousemove', handleUpdate))
function handleUpdate(){
	const sufix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${sufix}`);
	console.log(`--${this.name}=${this.value}${sufix}`);
}
