var num = document.getElementById('numero')
var tab = document.getElementById('tabuada')

function tabuada(){
    if(num.value.length == 0){
        alert('Número Invalido')
    }else{
        var n = Number(num.value)
        let c = 0
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.value = `tab${c}`
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}