const englishLesson = '8:00 English lesson'
const watchJS = '9:00 Watch JavaScript course'
const doWorkout = '10:00 Do wrkout'
const createAction = document.querySelector('.create-action')

function createCalendar(elem, year, month) {
    elem = document.querySelector(elem)

    let mon = month - 1
    let date = new Date(year, mon)

    let table = `
<table>
<caption>December ${year}</caption>
<tr>
<th>Monday</th>
<th>Tuesday</th>
<th>Wednesdey</th>
<th>Thurthday</th>
<th>Friday</th>
<th>Saturday</th>
<th>Sunday</th>
</tr>
<tr>`
        /*'<td><div class="task">10:00 Do wrkout</div></td>'*/
    for (let i = 0; i < getDay(date); i++) {
        table += '<td></td>'
    }

    while (date.getMonth() == mon) {
        if (date.getDate() == 1) {
            table += '<td class="current"><a href="">' + date.getDate() +
                '</a><button>Add task</button><div class="task">' + englishLesson +
                '</div><div class="task">' + watchJS +
                '</div><div class="task">' + doWorkout +
                '</div></td>'
        } else {
            table += '<td><a href="">' + date.getDate() + '</a><button>Add task</button></td>'
            if (getDay(date) % 7 == 6) {
                table += '</tr><tr>'
            }
        }
        date.setDate(date.getDate() + 1)
    }
    if (getDay(date) != 0) {
        for (let i = getDay(date); i < 7; i++) {
            table += '<td></td>'
        }
    }
    table += '</tr></table>'
    elem.insertAdjacentHTML('beforeend', table)
}

function getDay(date) {
    let day = date.getDay()
    if (day == 0) day = 7
    return day - 1
}

for (let month = 12; month <= 12; month++) {
    createCalendar('.container', 2021, month)
}

const currentTd = document.querySelector('.current')
currentTd.append(createAction)