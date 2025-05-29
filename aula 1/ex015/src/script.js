var agora = new Date()
var hora = agora.getHours()

if (hora < 5) {
    document.getElementById('hora').innerHTML = `Agora são 
    ${hora} horas`
} else if (hora < 12){
    document.getElementById('hora').innerHTML = `Agora são ${hora} horas`
} else if (hora < 18){
    document.getElementById('hora').innerHTML = `Agora são ${hora} horas`
} else {
    document.getElementById('hora').innerHTML = `Agora são ${hora} horas`
}