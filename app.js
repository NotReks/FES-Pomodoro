let cancelId
let startTime
const countDown = 25 * 60 * 1000
let savedTime = 0

const timerMilliSeconds = document.querySelector('.timer__milliseconds')
const timerSeconds = document.querySelector('.timer__seconds')
const timerMinutes = document.querySelector('.timer__minutes')
const startButton = document.querySelector('.stopwatch__start')
const stopButton = document.querySelector('.stopwatch__stop')
const resetButton = document.querySelector('.stopwatch__reset')

function startTimer(){
  startButton.disabled = true
  stopButton.disabled = false
  resetButton.disabled = false

  startTime = Date.now()
  cancelId = requestAnimationFrame(updateTimer)
}
function stopTimer(){
  startButton.disabled = false
  stopButton.disabled = true
  resetButton.disabled = false

  savedTime = Date.now() - startTime + savedTime
  console.log('stop')
  cancelAnimationFrame(cancelId)
}
function resetTimer(){
  startTime = Date.now()
  savedTime = 0

  timerMilliSeconds.innerHTML = "000"
  timerSeconds.innerHTML = "05"
  timerMinutes.innerHTML = "01"
}

function updateTimer(){
  let msElapsed = Date.now() - startTime + savedTime

  let msLeft = countDown - msElapsed
  let secondsLeft = msLeft / 1000
  let minutesLeft = secondsLeft / 60

  let msText = msLeft % 1000
  let sText = Math.floor(secondsLeft) % 60
  let mText = Math.floor(minutesLeft)

  if (mText.toString().length < 2){
    mText = mText.toString().padStart(2, '0')
  }
  if (sText.toString().length < 2){
    sText = sText.toString().padStart(2, '0')
  }
  if (msText.toString().length < 3){
    msText = msText.toString().padStart(3, '0')
  }

  timerMilliSeconds.innerHTML = msText
  timerSeconds.innerHTML = sText
  timerMinutes.innerHTML = mText

  cancelId = requestAnimationFrame(updateTimer)
}