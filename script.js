let timer = document.querySelector('#timer')
let startpauss = document.querySelector("#start")
let body = document.querySelector('body')
let sp = 0

function pause() {
    let timing = 0
    sp++
    let sla;
    let min = 0

    sla  = setInterval(function() {

    

    if(sp == 1) {
        startpauss.value = 'Pause'
            timing++
            if(timing < 10) {
                timer.innerHTML = `0${min}:0${timing}`
            } else if(timing >= 10 && timing <= 60) {
                timer.innerHTML = `0${min}:${timing}`
            } else if(timing >= 60) {
                min++
                timing = 0
                timer.innerHTML = `0${min}:0${timing}`
            }
} else if(sp > 1) {
    clearInterval(sla)
    startpauss.value = 'Start'
    sp = 0
}
},1000)
}





