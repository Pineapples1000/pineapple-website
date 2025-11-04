let bgChange = document.getElementById("bodyID");
let bgNum = Math.floor(Math.random()*22);
console.log(bgNum);
bgChange.style.backgroundImage = "url('images/bg-images/img"+bgNum+".jpg')";