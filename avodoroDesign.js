class Session {
    constructor(type = "", durationByMinutes = 20) {
        this.type = type; // work || break 
        this.durationByMinutes = durationByMinutes
        //rechange
        // this.durationBySeconds = durationByMinutes * 60;
        this.durationBySeconds = 7;
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
    startTimer(callback) {

        return () => {
            console.log(this)
            // let durationBymillis = this.durationBySeconds * 1000
            console.log(`this timer will run for ${this.durationBySeconds / 60} minutes`)

            this.#countDownInterval = setInterval(() => {
                console.log(this.durationBySeconds)
                this.durationBySeconds--
                this.timePassed++
                console.log(this.durationBySeconds)
                if (this.durationBySeconds < 1) {
                    clearInterval(this.#countDownInterval);

                    // this callback going to be recived from Bus object 
                    callback()

                }

            }, 1000)
        }
        // }))
    }
    pauseTimer() {
        return () => {

            clearInterval(this.#countDownInterval)
        }
    }
    stopTimer() {
        return () => {
            console.log(this)
            clearInterval(this.#countDownInterval)
            this.durationBySeconds = this.durationByMinutes * 60;
        }
    }
}


class DayReport {

    constructor() {
        this.sessions = []
        this.date = (new Date()).getTime()
    }

    addSession(value) {
        this.sessions.push(value)
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

        if (this.list.length < 1) {
            return this.list.push(report)
        }
        let lastItemIndex = this.list.length - 1
        let lastItem = this.list[lastItemIndex]

        console.log(lastItem)
        // console.log(report.date)
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
    pushSession = () => {
        // console.log("hell")
        console.log(this)
        this.dayReport.addSession(this.session)
        this.reports.updateReport(this.dayReport)

        // perhabe update the use with the new reports 
    }

}


var session1 = new Session('work', 1)
var dayReport1 = new DayReport()
var reports1 = new Reports()
// var myBus = new Bus(session1, dayReport1, reports1)
var myBus = new Bus(session1, dayReport1, reports1)


function myFunction() {
    console.log('test !!')
}

// myBus.pushSession()


// html elements 
let startBtn = document.getElementById('start-btn')
let pauseBtn = document.getElementById('pause-btn')
let stopBtn = document.getElementById('stop-btn')
let timerEl = document.getElementById('timer')
let testEl = document.getElementById('test')

timerEl.innerText = `${session1.durationBySeconds} s`


let myString = "hello"
startBtn.addEventListener("click", session1.startTimer(myBus.pushSession))
pauseBtn.addEventListener("click", session1.pauseTimer())

testEl.innerHTML = myString;


// myString = 'hello';




// console.log(session1.durationBySeconds)










