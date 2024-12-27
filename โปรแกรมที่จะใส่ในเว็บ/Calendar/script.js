const date_cells = document.getElementById('date');
const weekday = document.getElementById('weekday');
const current_date = document.getElementById('date_now');
const current_year = document.getElementById('year');
const current_month = document.getElementById('month');
const text_save = document.getElementById('event');
const backdrop = document.getElementById('backdrop');
const input = document.getElementById('input_event');
const delete_event = document.getElementById('delete_event');
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
const days_list = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];


function initialize(){
    const date = new Date();

    if (nav !== 0){
        date.setMonth(new Date().getMonth() + nav);
    }

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    // console.log(day);

    const firstdaymonth = new Date(year, month, 1);
    const dayinMonth = new Date(year, month+1, 0).getDate();
    
    const nextMonthfirstdate = new Date(year, month+1, 1);
    const nextMonthday = nextMonthfirstdate.getDay();
    let padday = (days_list.indexOf('Saturday') + 1) - nextMonthday;
    
    const datestr = firstdaymonth.toLocaleDateString('en-us',{
        weekday:
            "long",
        year:
            "numeric",
        month:
            "numeric",
        day:
            "numeric"
    });

    date_cells.innerHTML = '';
    weekday.innerHTML = '';

    const paddingdays = days_list.indexOf(datestr.split(", ")[0]);

    //สร้างชื่อวัน
    for (i = 0 ; i < days_list.length ; i++){
        const dayinweek = document.createElement('div');
        dayinweek.classList.add('dayinweek');
        dayinweek.innerText = days_list[i];

        weekday.appendChild(dayinweek);
    }

    //สร้างตารางวันที่
    for (i = 1 ; i <= paddingdays + dayinMonth + padday ; i++){
        const cells = document.createElement('div');
        cells.classList.add('cell');

        const day_str = `${month + 1}/${i - paddingdays}/${year}`

        if (i > paddingdays){
            cells.innerText = i - paddingdays;
            cells.classList.add('pointer');

            const event_days = events.find(e => e.date === day_str);
            cells.addEventListener('click',() => call_input(day_str));
            
            if (event_days){
                const event_list = document.createElement('div');
                event_list.classList.add('list_event');
                event_list.innerHTML = event_days.title;
                cells.appendChild(event_list);
            }
            
            if (i > paddingdays + dayinMonth){
                    cells.innerHTML = '';
                    cells.classList.add('padding');
            }

            if (i-paddingdays === day && nav === 0){
                cells.classList.add('this_day');
            }
        }
        else{
            cells.classList.add('padding');
        }
        
        if (i > paddingdays + dayinMonth && nextMonthday === 0){
            break;
        }
        else{
            date_cells.appendChild(cells);       
        }
        
    }

    current_year.textContent = `Calender ${year}`;
    current_month.textContent = `${monthNames[month]}`;
}





function updateTime(){
    const this_day = new Date();
    const str_thisday = this_day.toLocaleDateString(
        "en-us",
        {
            weekday:
                "long",
            day:
                "numeric",
            month:
                "long",
            year:
                "numeric"
        }
    )
    const time_thisday = this_day.toLocaleTimeString();

    current_date.textContent = `${str_thisday} , ${time_thisday}`;
}





function changmonth(){
    document.getElementById('back').addEventListener('click',() => {
        nav--;
        initialize();
        // console.log(nav);
    });
    
    document.getElementById('next').addEventListener('click',() => {
        nav++;
        initialize();
        // console.log(nav);
    });

    document.getElementById('save').addEventListener('click',save);

    document.getElementById('cancel').addEventListener('click',cancel);

    document.getElementById('delete').addEventListener('click',clear);

    document.getElementById('close').addEventListener('click',cancel);
}

function cancel(){
    input.classList.remove('error');
    text_save.style.display = 'none';
    delete_event.style.display = 'none';
    backdrop.style.display = 'none';
    input.value = '';
    clicked = null;
    initialize();
}

function save(){
    if (input.value){
        input.classList.remove('error');

        events.push({
            date: clicked,
            title: input.value,
        });

        localStorage.setItem('events',JSON.stringify(events));
        cancel();
    }
    else{
        input.classList.add('error');
    }
}

function clear(){
    events = events.filter(e => e.date !== clicked);
    localStorage.setItem('events',JSON.stringify(events))
    cancel();
}

function call_input(dt){
    clicked = dt;

    const event_days = events.find(e => e.date === clicked);

    if (event_days) {
        document.getElementById('event_detail').innerHTML = event_days.title;
        delete_event.style.display = 'flex';
    }
    else{
        text_save.style.display = 'flex';
    }

    backdrop.style.display = 'block';
}


initialize();

changmonth();

updateTime();
setInterval(updateTime,1000);