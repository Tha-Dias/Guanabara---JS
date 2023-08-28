

function contando() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtFim')
    var passo = document.getElementById('txtPasso')
    var res = document.getElementById('res')

    //TESTANDO SE AS VARIÁVEIS ESTAO VAZIAS
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO], preencha os dados corretamente')

    } else {
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)   

        //VERIFICANDO DE PASSO É <= 0
        if (passo <= 0) {
            window.alert("PASSO INVALIDO, considerando passo 1")
            passo = 1
        }

        //CONTAGEM CRESCENTE 
        if (inicio < fim ) {
            for(var i = inicio; i <= fim; i += passo){
    
                res.innerText += `${i} \u{1F603}`
            }
            res.innerHTML += `\u{1F3C1}`

        //CONTAGEM REGRESSIVA
        }else {
            for(var i = inicio; i >=fim; i -= passo) {

                res.innerHTML += `${i} \u{1F603}`
            }
            res.innerHTML += `\u{1F3C1}`
        }

         // Limpar campos de entrada após adicionar um novo dado
        inicio.value = "";
        fim.value = "";
        passo.value = "";
        }         

}
