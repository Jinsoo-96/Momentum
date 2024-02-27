const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date()
    const {H, M, S} = {H:`${date.getHours()}`.padStart(2,"0"),
                     M:`${date.getMinutes()}`.padStart(2,"0"), 
                     S:`${date.getSeconds()}`.padStart(2,"0")};
    clock.innerText = `${H} : ${M}`;
}

getClock();
setInterval(getClock, 30000);
// setTimeout(sayHello, 5000);