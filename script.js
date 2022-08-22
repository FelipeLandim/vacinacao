function verificar(){
    var ida = document.getElementById('idade')
    var res = document.getElementById('res')
    var i = Number(ida.value)
    res.innerHTML = `A criança tem <strong>${i} anos.</strong>`
    if (i < 5){
        res.innerHTML += `<p>Deve ser vacinada contra a gripe.`
        res.innerHTML += `<p>Procure o posto de saúde mais proximo.`
    }else{
        res.innerHTML += `<p>A vacina só estará disponivel em breve.`
        res.innerHTML += `<p>Aguarde as proximas informações.`
        res.innerHTML += `<p>Possivelmente daqui a <strong>3 meses</strong>`
    }
    res.innerHTML += `<p>Cuide da saúde sempre. Até a proxima.`
}