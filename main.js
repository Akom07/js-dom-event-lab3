// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener or Onclick and getElementById if you're doing it right...

const stopLight = document.getElementById('stopLight')
const slowLight = document.getElementById('slowLight')
const goLight = document.getElementById('goLight')
const stopButton = document.getElementById('stopButton')
const slowButton = document.getElementById('slowButton')
const goButton = document.getElementById('goButton')

stopButton.addEventListener('click' , ()=>{
    stopLight.style.backgroundColor = "red"
    slowLight.style.backgroundColor = "black"
    goLight.style.backgroundColor = "black"
})
slowButton.addEventListener('click' , ()=>{
    stopLight.style.backgroundColor = "black"
    slowLight.style.backgroundColor = "orange"
    goLight.style.backgroundColor = "black"
})
goButton.addEventListener('click' , ()=>{
    stopLight.style.backgroundColor = "black"
    slowLight.style.backgroundColor = "black"
    goLight.style.backgroundColor = "green"
})