var num = document.getElementById('txtNum')
var lista = document.getElementById('respostas')
var res = document.getElementById('res')
var numero = []

//testa se o numero esta entre 1 e 100
function isNumero(n) {
    if (Number(n) >=1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}
//função que confere se o numero ja esta na lista ou não
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1 ){
        return true
    } else {
        return false
    }
}


function adicionar(){

    if(isNumero(num.value) && !inLista(num.value, numero) ){ //!inLista testa se não for verdade

        numero.push(Number(num.value))
        let item = document.createElement('option') //criou um novo elemento
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)

        res.innerHTML = ''
    }else {
        window.alert('Valor ja encontrado ou invalido')    
    }
    num.value = '' //limpa o num 
    num.focus() //add o focu no input num

}

function finalizar() {

    if (numero.length == 0) {
        window.alert('Necessário add itens para finalizar')
    }else {
        let tot = numero.length
        let maior = numero[0]
        let menor = numero[0]
        let soma = 0
        let media = 0
        for(let pos in numero){
            soma += numero[pos]

            if(numero[pos] > maior){
                maior = numero[pos]
            }
            if(numero[pos] < menor){
                menor = numero[pos]
            }

        }
        media = soma/numero.length

        res.innerHTML = ''
        
        res.innerHTML += `<p>Ao todos temos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado é ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é ${media}</p>`

    }
}
