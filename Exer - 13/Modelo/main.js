function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    //verificando se o ano esta vazio ou se é maior que o ano atual
    if (Fano.value.length == 0 || Fano.value > ano) {
        window.alert('ERRO, preecha o ano corretamente. ')

    }else {
        var sexo = document.getElementsByName('radiosex')
        var idade = ano - Number(Fano.value)
        var genero = ''
        var img = document.createElement('img')//criei a tag imagem dinamicamente
        img.setAttribute('id', 'foto')//add um id na tag img
        img.style.width = '300px'

        if (sexo[0].checked) {
            genero = 'Homem'

            if (idade > 0 && idade <= 10 ){
                img.setAttribute('src', 'Assets/homem-criança.png')
                //criança
            } else if (idade <= 21){
                img.setAttribute('src', 'Assets/homem-jovem.png')
                //jovem
            }else if(idade < 60) {
                img.setAttribute('src', 'Assets/homem-adulto.png')

                //adulto
            }else {
                img.setAttribute('src', 'Assets/homem-idoso.png')

                //idoso
            }
        }else {
            genero = 'Mulher'

            if (idade > 0 && idade <= 10 ){
                img.setAttribute('src', 'Assets/mulher-criança.png')

                //criança
            } else if (idade <= 21){
                img.setAttribute('src', 'Assets/mulher-jovem.png')

                //jovem
            }else if(idade < 60) {
                img.setAttribute('src', 'Assets/mulher-adulta.png')

                //adulto
            }else {
                img.setAttribute('src', 'Assets/mulher-idosa.png')

                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${genero}, de ${idade} anos de idade.`
        res.appendChild(img)
    }

}