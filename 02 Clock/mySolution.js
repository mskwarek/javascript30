const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setClock(){
	const now = new Date();
	const seconds = now.getSeconds()/60 * 360 + 90;
	const min = now.getMinutes()/60 * 360 + now.getSeconds()/60 * 6  + 90 ;
	const hour = now.getHours()/12 * 360 + now.getMinutes()/60 * 30 + 90;
	secondHand.style.transform = `rotate(${seconds}deg)`
	minuteHand.style.transform = `rotate(${min}deg)`
	hourHand.style.transform = `rotate(${hour}deg)`
	console.log(hour, min, seconds);
	console.log(now.getHours(), now.getMinutes(), now.getSeconds());
}

setInterval(setClock, 1000);