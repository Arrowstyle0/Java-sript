let seconds = 0
function Timer() {
    

    setInterval(function (){
      seconds++ ;
      console.log(seconds);      
    },1000)
}
console.log(Timer());
