 //stopwatch
 const stopwatchFace = document.getElementById('stopwatch-face');
 const startBtn = document.getElementById('start');
 const stopBtn = document.getElementById('stop');
 const resetBtn = document.getElementById('reset');
 let isStopwatchWorking = false;
 let [min, sec, msec] = [0, 0, 0];
 let setStopwatch;

 //timer
 const addMinBtn = document.getElementById('add-1min');
 const add5MinBtn = document.getElementById('add-5min');
 const timerFace = document.getElementById('timer-face');
 let [minTimer, secTimer] = [0, 59];
 let timeOutTimer;

 function timeOutStopwatch() {
     setStopwatch = setTimeout(() => {
         msec++;

         msec == 60 ? `${sec++, msec = 0}` : " ";
         sec == 60 ? `${min++, sec = 0}` : " ";

         if (min < 10) {
             sec < 10 ?
                 stopwatchFace.innerHTML = '0' + min + ":" + '0' + sec + "." + `${msec < 10 ? '0' + msec : msec}` :
                 stopwatchFace.innerHTML = '0' + min + ":" + sec + "." + `${msec < 10 ? '0' + msec : msec}`;
         }

         if (min >= 10) {
             sec < 10 ?
                 stopwatchFace.innerHTML = min + ":" + '0' + sec + "." + `${msec < 10 ? '0' + msec : msec}` :
                 stopwatchFace.innerHTML = min + ":" + sec + "." + `${msec < 10 ? '0' + msec : msec}`;
         }
         timeOutStopwatch()
     }, 15)
 }

 function startStopwatch() {
     isStopwatchWorking === false ? isStopwatchWorking = true && timeOutStopwatch() : " ";
 }

 stopStopwatch = () => {
     clearTimeout(setStopwatch);
     isStopwatchWorking = false;
 }

 function resetStopwatch() {
     clearTimeout(setStopwatch);
     isStopwatchWorking = false;
     [min, sec, msec] = [0, 0, 0];
     stopwatchFace.innerHTML = '0' + min + ":" + '0' + sec + "." + '0' + msec;
 }

 /////////////////////////////
 function startTimer() {
     timeOutTimer = setTimeout(() => {
         minTimer !== 0 && secTimer == 59 ? --minTimer : " ";

         if (minTimer >= 10) {
             secTimer >= 10 ?
                 timerFace.innerHTML = minTimer + ":" + secTimer :
                 timerFace.innerHTML = minTimer + ":" + "0" + secTimer;
         }

         if (minTimer < 10) {
             secTimer < 10 ?
                 timerFace.innerHTML = '0' + minTimer + ":" + "0" + secTimer :
                 timerFace.innerHTML = '0' + minTimer + ":" + secTimer;
         }

         if (secTimer == 0) {
             if (minTimer == 0) {
                 timerFace.classList.add('blinking');
                 return clearTimeout(timeOutTimer)
             }
             secTimer = 60;
         }

         --secTimer;
         startTimer();
     }, 10)
 }

 function addMinuteToTimer() {
     timerFace.classList.remove('blinking');
     clearTimeout(timeOutTimer);
     minTimer += 1;
     startTimer();
 }

 function add5MinToTimer() {
     timerFace.classList.remove('blinking');
     clearTimeout(timeOutTimer);
     minTimer += 5;
     startTimer()
 }

 startBtn.addEventListener('click', startStopwatch);
 stopBtn.addEventListener('click', stopStopwatch);
 resetBtn.addEventListener('click', resetStopwatch);
 addMinBtn.addEventListener('click', () => minTimer < 59 ? addMinuteToTimer() : " ");
 add5MinBtn.addEventListener('click', () => minTimer < 54 ? add5MinToTimer() : " ");
