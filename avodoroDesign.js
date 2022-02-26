class Session {
    constructor(parentName, type = "", durationByMinutes = 20) {
        this.parentName = parentName
        this.type = type; // work || break 
        this.durationByMinutes = durationByMinutes
        this.durationBySeconds = durationByMinutes * 60;
        // time passed will be levarged when duration changes, so 
        this.timePassed = 0;
        this.timeLeft = this.duration - this.timePassed;
        // 
    }
    sessionProduct() {
        return {
            type: this.type,
            duration: this.durationBySeconds
        }
    }
    // i sat it private because why not 
    #countDownInterval = undefined;

    //  i used currying here, because when i called in event handler, it auto invoke it self if i passed it with an argument 
    startTimer(session, callback) {
        return function () {
            console.log(session)
            // let durationBymillis = this.durationBySeconds * 1000
            console.log(`this timer will run for ${session.durationBySeconds / 60} minutes`)

            session.#countDownInterval = setInterval(function () {
                console.log(session.durationBySeconds)
                session.durationBySeconds--
                session.timePassed++
                console.log(session.durationBySeconds)
                if (session.durationBySeconds < 1) {
                    clearInterval(myInterval);
                    // session.pushSession(DayReport)
                    // Bus.pushSession(session.sessionProduct(), session.parentName)

                    // this callback going to be recived from Bus object 
                    callback()

                }

            }, 1000)
        }
        // }))
    }
    pauseTimer(session) {
        return function () {

            clearInterval(session.#countDownInterval)
        }
    }
    stopTimer(session) {
        return function () {

            clearInterval(session.#countDownInterval)
            session.durationBySeconds = session.durationByMinutes * 60;
        }
    }
}


class DayReport {

    constructor(parentName) {

        this.parentName = parentName
        this.sessions = []
        this.date = (new Date()).getTime()
    }

    addSession(value) {
        this.sessions.push(value)
        Bus.updateReport(dayReport)
    }
}


class Reports {
    constructor() {
        this.list = [];
        this.inceptionDate = (new Date()).getTime()
    }
    get totalMonths() {
        // calculate months from inception till todays date
    }
    get totalWeeks() {
        // calculate weeks from inception till todays date
    }
    get totalDays() {
        // calculate days from inception till todays date
    }
    updateReport(report) {

        let lastItemIndex = this.list.length - 1
        let lastItem = this.list[lastItemIndex]

        // to check if same day report or new day 
        if (lastItem.date === report.date) {
            this.list[lastItemIndex] = report
            return
        }
        this.list.push(report)
    }
}

// globalObject 
class Bus {

    constructor(session, dayReport, reports) {
        this.session = session;
        this.dayReport = dayReport;
        this.reports = reports;
    }
    // when duration of session is done, dayReport and reports have to be updated 
    pushSession() {
        this.dayReport.addSession(this.session)
        this.reports.updateReport(this.dayReport)

        // perhabe update the use with the new reports 
    }

}


var dayReport1 = new DayReport()
var session1 = new Session('dayReport1', 'work', 1)

function myFunction() {
    console.log('test !!')
}



// html elements 
let startBtn = document.getElementById('start-btn')
let pauseBtn = document.getElementById('pause-btn')
let stopBtn = document.getElementById('stop-btn')
let timerEl = document.getElementById('timer')
let testEl = document.getElementById('test')

timerEl.innerText = `${session1.durationBySeconds} s`


let myString = "hello"
startBtn.addEventListener("click", session1.startTimer(session1))
pauseBtn.addEventListener("click", session1.pauseTimer(session1))

testEl.innerHTML = myString;


// myString = 'hello';




// console.log(session1.durationBySeconds)










