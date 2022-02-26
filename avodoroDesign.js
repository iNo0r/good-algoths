class Session {
    constructor(parentName, type = "", durationByMinutes = 20, timePassed = 0) {
        this.type = type; // work || break || avodoroWork
        this.durationBySeconds = durationByMinutes * 60;
        // time passed will be levarged when duration changes, so 
        this.timePassed = timePassed;
        this.timeLeft = this.duration - this.timePassed;
        // 
        this.parentName = parentName
    }
    sessionProduct() {
        return {
            type: this.type,
            duration: this.durationBySeconds
        }
    }
    #countDownInterval = undefined;

    //  i used currying here, because passing an argumnet 
    startTimer(session) {
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
                    Bus.pushSession(session.sessionProduct(), session.parentName)

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

    // name = 'someone'
    constructor(sessions = []) {

        this.sessions = sessions
        this.date = (new Date()).getTime()
    }

    set session(value) {
        this.sessions.push(value)
    }
}





let globalObject = this
class Bus {

    static pushSession(session, dayReportName /* Report */) {
        globalObject[dayReportName].list.push(session)
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










