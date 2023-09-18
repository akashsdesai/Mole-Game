const squares=document.querySelectorAll('.square')
const mole=document.querySelector('.mole')
let timeLeft=document.getElementById('time-left')
let score=document.getElementById('score')
let startGame=document.getElementById('startGame')
let stopGame=document.getElementById('stopGame')
let data=document.querySelector('.data')
let timerId=null
let result=0
let hitPosition
let currentTime=60
let countDownTimer
let randomPosition
let nw
function randomSquare(){
  squares.forEach(square=>{
    square.classList.remove('mole')
  })
  randomPosition=squares[Math.floor(Math.random()*9)]
  randomPosition.classList.add('mole')
  hitPosition=randomPosition.id
}
squares.forEach(square=>{
  square.addEventListener('mousedown',()=>{
    if(square.id==hitPosition){
      result++;
      score.innerHTML=result
      hitPosition=null
    }
  })
})
function stopG(){
  alert('Game Stoped at '+currentTime+" Seconds")
  clearInterval(countDownTimer)
  clearInterval(timerId)
  randomPosition.classList.remove('mole')
  result=0
  currentTime=60
  score.innerHTML=result
  timeLeft.innerHTML=currentTime
  data.removeChild(data.lastChild)
}
function start(){
  let nw=document.createElement('button')
  nw.setAttribute('id','stopGame')
  nw.setAttribute('onclick' ,'stopG()')
  nw.innerHTML='Stop Game'
  data.appendChild(nw)
  clearInterval(countDownTimer)
  clearInterval(timerId )
  result=0
  currentTime=60
  score.innerHTML=result
  timeLeft.innerHTML=currentTime
  timerId=setInterval(randomSquare,500)
  countDownTimer=setInterval(countDown,1000)
}
function countDown(){
  currentTime--
  timeLeft.innerHTML=currentTime
  if(currentTime===0){
     clearInterval(countDownTimer)
     clearInterval(timerId )
     alert('Game Over Your final score is '+result)
     stopG()
  }
}
startGame.addEventListener('click',start)