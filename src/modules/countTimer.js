function countTimer(deadline) {
    const timerHours = document.querySelector('#timer-hours'),
          timerMinutes = document.querySelector("#timer-minutes"),
          timerSeconds = document.querySelector("#timer-seconds");

    function getTimeRemaining() {
        let dateStop= new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = ((dateStop - dateNow) / 1000),
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60),
            tempArr = [seconds, minutes, hours];
        tempArr.forEach((item, index) => {
            if(item < 10){
                tempArr[index] = "0" + item;
            }
        });

        return {
            "seconds":tempArr[0],
            "minutes":tempArr[1],
            "hours":tempArr[2],
            timeRemaining}
    }

    (function updateClock(){
        const timer = getTimeRemaining();

        timerHours.textContent = timer.hours;
        timerSeconds.textContent = timer.seconds;
        timerMinutes.textContent =  timer.minutes;
        if(timer.timeRemaining > 0 ){
            const repeating = setTimeout(updateClock, 1000)
        } else if (timer.timeRemaining <= 0 ){
            timerHours.textContent = "00";
            timerSeconds.textContent = "00";
            timerMinutes.textContent =  "00";
        }
    }());
}

export default countTimer;