var agora = new Date()
var hora = agora.getHours()
console.log(`agora sao exatamente ${hora} horas`)
if (hora < 12 && hora > 5){
    console.log(`Bom dia!`)
}else if (hora <= 18 && hora > 12) {
    console.log(`Boa Tarde!`)
}else if (hora > 18 && hora <= 23){
    console.log(`Boa noite!`)
}else{
    console.log(`Boa madrugada`)
}