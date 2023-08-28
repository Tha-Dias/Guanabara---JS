
function tabuada() {
    var num = document.getElementById('numeroTab')
    var tab = document.getElementById('tabuada')

    if (num.value.length == 0){
        window.alert('ERRO, preencha o campo corretamente')
    }else {

        var n = Number(num.value)
        var i = 1
        tab.innerHTML = ''
        while(i <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            tab.appendChild(item)

            i++
        }
    }
}