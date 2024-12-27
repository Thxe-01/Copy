let subject = document.getElementById('subject');
let alert_ms = document.getElementById('alert');
let score = document.getElementById('score_txt');
const input = document.getElementById('input');

let running = false;
let total_score = 0;
let temp_subject_str = '';
let temp_subject = '';

start();

function start() {
    running = true;
    total_score = 0;
    score.innerHTML = `Score : ${total_score}`;
    if (running) {
        random_subject();
        input.addEventListener('keypress',check_keypress);
        input.addEventListener('input',input_check);
    }
}

function random_subject() {
    let subject_arr = [];
    temp_subject_str = '';
    temp_subject = '';

    for (i = 0 ; i < 2 ; i++) {
        subject_arr.push(parseInt(Math.random() * 100));
    }

    temp_subject = eval(subject_arr.join('+'));

    temp_subject_str = `${subject_arr.join('+')} = ?`;

    subject.innerHTML = temp_subject_str;
}

function check_keypress(event) {
    let input_val = parseInt(input.value);
    if (event.key === 'Enter') {
        if (input.value !== '') {
            alert_ms.innerHTML = '';
            check_ans();
        }
        else {
            alert_ms.innerHTML = 'Please Write Your Answer!!!';
            setTimeout(() => {
                alert_ms.innerHTML = '';
            },1000)
        }
    }
}

function check_ans() {
    let input_val = parseInt(input.value);

    if (input_val == temp_subject) {
        total_score++;
        score.innerHTML = `Score : ${total_score}`;
        input.value = '';
        random_subject();
    }
    else {
        input.value = '';
        random_subject();
    }
}

function input_check() {
    if (input.value.length > 3) {
        input.value = input.value.slice(0, 3); // ตัดข้อความเกินออก
    }
}
