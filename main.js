function currentTime() {
    let pureHours = new Date().getHours();
    let hours = pureHours < 10 ? `0${pureHours}` : pureHours;
    let pureMinutes = new Date().getMinutes();
    let minutes = pureMinutes < 10 ? `0${pureMinutes}` : pureMinutes;

    return {
        hours,
        minutes
    }
}

//    utilize setInterval if ou want it to operate dynmically 