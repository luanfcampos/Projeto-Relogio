// Elementos da interface

let digitalElement = document.querySelector('.digital')
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')

// Processo de atualização do relogio

function updateClock() {
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()



    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}` //atualiza o relogio digital

    let sDeg = ((360 / 60) * second) - 90 //conpensando a posição inicial do ponteiro
    let mDeg = ((360 / 60) * minute) - 90 
    let hDeg = ((360 / 12) * hour) - 90 

    sElement.style.transform = `rotate(${sDeg}deg)` //atualiza a posição dos ponteiros
    mElement.style.transform = `rotate(${mDeg}deg)`
    hElement.style.transform = `rotate(${hDeg}deg)`

    if (hour < 4) {
        document.getElementsByTagName('body').style.backgoundImage = url('noite.jpg')
    }else if (hour < 12){
        document.getElementsByTagName('body').style.backgoundImage = url('manha.jpg')
    }else if (hour < 18){
        document.getElementsByTagName('body').style.backgoundImage = url('tarde.jpg')
    }else {
        document.getElementsByTagName('body').style.backgoundImage = url('noite.jpg')
    }
}

//essa função adiciona 0 a esquerda de valores < 10 para melhor formatação
function fixZero(time) { 
    return time < 10 ? `0${time}` : time // operador ternario, mas poderia ter utilizado if else se fosse mais complexo
} 



setInterval(updateClock, 1000)
updateClock()
