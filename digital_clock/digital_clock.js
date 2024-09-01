const clock = document.querySelector('#clock')


// set interval function run in a specific interval as per given interval
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)