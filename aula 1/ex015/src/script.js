    const agora = new Date()
    const hora = 15
    const img = document.getElementById('foto')

    let caminho = "";

    document.getElementById('hora').innerHTML = `Agora são ${hora} horas`

    if(hora < 5){
        document.getElementById('b').style.backgroundColor = '#2d6c89'
        caminho = "src/img/madruga.jpg";
    } else if (hora < 12){
        document.getElementById('b').style.backgroundColor = 'rgb(238, 213, 158)'
        caminho = "src/img/nascer.jpg";
    } else if (hora < 18){
        document.getElementById('b').style.backgroundColor = '#FFA500'
        caminho = "src/img/nascer.jpg";
    }
    img.src = caminho
