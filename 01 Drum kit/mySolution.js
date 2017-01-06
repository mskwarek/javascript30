const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e){
	if(e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

window.addEventListener('keydown', function(e) {
	play_audio_if_needed(get_audio_element(e.keyCode))
	show_key_pressed(get_key_element(e.keyCode));
});

function get_audio_element(keyCode){
	return document.querySelector(`audio[data-key="${keyCode}"]`);
}

function get_key_element(keyCode){
	return document.querySelector(`.key[data-key="${keyCode}"]`);
}

function play_audio_if_needed(audio){
	if(!audio){
		return;
	}
	play_element(audio);
}

function play_element(audio){
	audio.currentTime = 0;
	audio.play();
}

function show_key_pressed(key){
	if(!key){
		return;
	}
	key.classList.add('playing');
}