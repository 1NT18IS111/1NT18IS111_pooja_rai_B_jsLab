
const ball = document.getElementById("character");
const block = document.getElementById("block");
const score = document.getElementById("score");
let logArray=[];
function jump() {
  ball.classList.add("animate");
  setTimeout(() =>
    ball.classList.remove("animate"), 500);
}
document.addEventListener('keypress', (event) => {
      jump();
      console.log(jump);
;  })

  setInterval(() => {

    //const ballTop = parseInt(ball.style.top);
    const ballTop = parseInt(window.getComputedStyle(ball)
      .getPropertyValue('top'));
           // console.log(ballTop);

    const blockLeft = parseInt(window.getComputedStyle(block)
      .getPropertyValue('left'));
     // console.log(blockLeft);
  
    if (blockLeft < 50 && blockLeft > 10 && ballTop > 400) {
      alert("You lose");
      location.reload();
    }
  }, 50);