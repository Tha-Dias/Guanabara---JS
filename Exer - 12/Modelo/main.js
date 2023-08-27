
function carregar() {
    var msg = document.getElementById('mensagem')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12 ){
        imagem.src = 'Assets/manhã.gif'
        document.body.style.background= '#f6ce99'

    }else if (hora >= 12 && hora < 18) {
        imagem.src = 'Assets/tarde.png'
        document.body.style.background= '#f89f81'

    }else {
        imagem.src = 'Assets/noite.png'
        document.body.style.background= '#0e1a34'

    }
}