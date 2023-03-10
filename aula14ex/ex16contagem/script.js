function contar() {
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossivel contar!`
        //window.alert('[ERRO] faltam dados')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert(`Passo invalido, considerando valor 1 para Passo`)
            p = 1
        }

        if (i < f){
            //contagem crescente
           for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F603}`
            } 
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F603}`
            }
        }
        
        res.innerHTML += ` \u{1F3C1}`
    }
}