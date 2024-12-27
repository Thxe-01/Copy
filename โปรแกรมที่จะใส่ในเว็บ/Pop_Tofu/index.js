let score = document.getElementById('score');
let costume = document.getElementById('costume');
let speaker_btn = document.getElementById('speaker');
let setting_btn = document.getElementById('setting');
const popup = document.getElementById('popup');
const backdrop = document.getElementById('backdrop');
const reset = document.getElementById('reset');
const skin = document.getElementById('skin');
const close_btn = document.getElementById('close');

let running = false;
let temp_score = 0;

start();

function start() {
    running = true;
    temp_score = 0;
    score.innerHTML = temp_score;
    if (running) {
        costume.addEventListener('click',clicked);
        speaker_btn.addEventListener('click',speaker);
        setting_btn.addEventListener('click',setting);
    }
}

function clicked() {
    let temp_costume = costume.getAttribute('src');
    if (temp_costume === 'costume1-1.png') {
        costume.src='costume2-1.png';        
        setTimeout(() => {
            costume.src='costume1-1.png';
        }, 200);
    }
    else if (temp_costume === 'pop1.png'){
        costume.src='pop2.png';        
        setTimeout(() => {
            costume.src='pop1.png';
        }, 200);
    }

    popsound();
    scoreup();
}

function scoreup() {
    temp_score++;
    score.innerHTML = temp_score;
}

function popsound() {
    let temp_costume = costume.getAttribute('src');
    let spk_attribute = speaker_btn.getAttribute('src');
    
    if (spk_attribute === 'speaker.png' && temp_costume === 'costume2-1.png') {
        const sound = new Audio('pop.m4a');
        sound.play();
        sound.currentTime = 0.25;
    }
    else if (spk_attribute === 'speaker.png' && temp_costume === 'pop2.png') {
        const sound = new Audio('popsound.mp3');
        sound.play();
        sound.currentTime = 0;
    }
}

function speaker() {
    let spk_attribute = speaker_btn.getAttribute('src');
    if (spk_attribute === 'speaker.png') {
        speaker_btn.src='mute.png';
    }
    else {
        speaker_btn.src='speaker.png';
    }
}

function setting() {
    popup.style.display = 'flex';
    backdrop.style.display = 'block';
    close_btn.addEventListener('click',close_popup);
    reset.addEventListener('click',reset_score);
    skin.addEventListener('click',change);
}

function close_popup() {
    popup.style.display = 'none';
    backdrop.style.display = 'none';
}

function reset_score() {
    temp_score = 0;
    score.innerHTML = temp_score;
}

function change() {
    let temp_costume = costume.getAttribute('src');
    if (temp_costume === 'costume1-1.png') {
        costume.src = 'pop1.png';
    }
    else {
        costume.src = 'costume1-1.png';
    }
}