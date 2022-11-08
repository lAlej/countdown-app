let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hours = document.querySelector(".hours");
let secPlus = document.querySelector(".sec-plus");
let minPlus = document.querySelector(".min-plus");
let hourPlus = document.querySelector(".hour-plus");
let secMinus = document.querySelector(".sec-minus");
let minMinus = document.querySelector(".min-minus");
let hourMinus = document.querySelector(".hour-minus");
let btnStart = document.querySelector(".btnStart");
let btnReset = document.querySelector(".btnReset");
let clock = new Audio("resources/alarm.mp3")

let miliseconds = 100;
let sec = 0;
let min = 0;
let hour = 0;
let run = false;

let html;

seconds.innerHTML = "0" + sec
minutes.innerHTML = "0" + min
hours.innerHTML = "0" + hour

// ADD TIME


secPlus.addEventListener("click", () => {

    if (sec == 59) {

        sec = 0;
        seconds.innerHTML = "0" + sec

    } else if (sec < 9) {
        sec = sec + 1;

        seconds.innerHTML = "0" + sec
    } else {

        sec = Number(sec) + 1;

        seconds.innerHTML = sec

    }

});

minPlus.addEventListener("click", () => {

    if (min == 59) {

        min = 0;
        minutes.innerHTML = "0" + min

    } else if (min < 9) {
        min = min + 1;

        minutes.innerHTML = "0" + min
    } else {

        min = Number(min) + 1;

        minutes.innerHTML = min
    }


});

hourPlus.addEventListener("click", () => {

    if (hour == 12) {
        hour = 0;
        hours.innerHTML = "0" + hour
    } else if (hour < 9) {
        hour = hour + 1;

        hours.innerHTML = "0" + hour
    } else {

        hour = Number(hour) + 1;

        hours.innerHTML = hour
    }


});


//SUBTRACT TIME

secMinus.addEventListener("click", () => {

    if (sec == 0) {

        sec = 59;

        seconds.innerHTML = sec;

    } else if (sec != 0 && sec < 11) {
        sec = sec - 1;

        seconds.innerHTML = "0" + sec;

    } else {
        sec = sec - 1;

        seconds.innerHTML = sec;
    }
});

minMinus.addEventListener("click", () => {

    if (min == 0) {

        min = 59;

        minutes.innerHTML = min;

    } else if (min != 0 && min < 11) {
        min = min - 1;

        minutes.innerHTML = "0" + min;

    } else {
        min = min - 1;

        minutes.innerHTML = min;
    }
});

hourMinus.addEventListener("click", () => {

    if (hour == 0) {

        hour = 12;

        hours.innerHTML = hour;
    } else if (hour != 0 && hour < 11) {
        hour = hour - 1;

        hours.innerHTML = "0" + hour

    } else {
        hour = hour - 1;

        hours.innerHTML = hour
    }
});



// START AND STOP 

btnStart.addEventListener("click", () => {

    if (sec != 0 | min != 0 | hour != 0 && run == false) {

        run = true;

        interval();
    } else {

    }


});

btnReset.addEventListener("click", () => {

    if (btnReset.innerHTML == "Reset") {
        sec = 0;
        min = 0;
        hour = 0;

        seconds.innerHTML = "0" + sec
        minutes.innerHTML = "0" + min
        hours.innerHTML = "0" + hour

    } else {

        run = false;

        interval();


    }

});



//INTERVAL FUNCTION

const interval = () => {

    if (run == true) {

        btnReset.innerHTML = "Stop";


        let timer = setInterval(() => {

            if (miliseconds != 0) {

                miliseconds = miliseconds - 1;

            } else if (sec != 0 && miliseconds == 0) {

                miliseconds = 99
                sec = sec - 1;

                if (sec < 10) {

                    seconds.innerHTML = "0" + sec

                } else {

                    seconds.innerHTML = sec
                }

            } else if (sec == 0 && miliseconds == 0 != (min == 0 && sec == 0)) {

                miliseconds = 99
                sec = 59
                min = min - 1;

                if (min < 10) {

                    minutes.innerHTML = "0" + min
                    seconds.innerHTML = sec

                } else {

                    minutes.innerHTML = min
                    seconds.innerHTML = sec
                }


            } else if (min == 0 && sec == 0 && miliseconds == 0 != (hour == 0 && min == 0 && sec == 0)) {

                miliseconds = 99
                sec = 59
                min = 59
                hour = hour - 1;


                if (hour < 10) {

                    hours.innerHTML = "0" + hour
                    minutes.innerHTML = min
                    seconds.innerHTML = sec

                } else {

                    hours.innerHTML = hour
                    minutes.innerHTML = min
                    seconds.innerHTML = sec

                }



            }

            if (run == false) {
                clearInterval(timer)

                console.log(run)


                btnReset.innerHTML = "Reset";

            } else if (hour == 0 && min == 0 && sec == 0) {

                clearInterval(timer)
                run = false;
                console.log(run)

                clock.play()


                btnReset.innerHTML = "Reset";

            }

        }, 10);
    }

};

