document.body.innerText = `na stronie spędziłeś ${0} sekund`;

const timer = function(){
    let time = 0;
    return () =>{
        time++;
        document.body.innerText = `na stronie spędziłeś ${time} sekund`;
    }
}

howLong = timer();

setInterval( howLong, 1000);