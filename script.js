const local = document.getElementById("local")
const ocorrido = document.getElementById("ocorrido")
const motivo = document.getElementById("motivo")
const efeito = document.getElementById("efeito")
const efeitopos = document.getElementById("efeitopos")
const carac = document.getElementById("carac")
var clicked = local
local.onclick = function(){
    clicked.style.borderBottom = "none"
    clicked.style.fontWeight= "400"
    clicked = local
    local.style.borderBottom = "1px solid #FFF"
    local.style.fontWeight = "900"
    }
ocorrido.onclick = function(){
    clicked.style.borderBottom = "none"
    clicked.style.fontWeight= "400"
    clicked = ocorrido
    ocorrido.style.borderBottom = "1px solid #FFF"
    ocorrido.style.fontWeight = "900"
}        
motivo.onclick = function(){
    clicked.style.borderBottom = "none"
    clicked.style.fontWeight= "400"
    clicked = motivo
    motivo.style.borderBottom = "1px solid #FFF"
    motivo.style.fontWeight = "900"
}        
efeito.onclick = function(){
    clicked.style.borderBottom = "none"
    clicked.style.fontWeight= "400"
    clicked = efeito
    efeito.style.borderBottom = "1px solid #FFF"
    efeito.style.fontWeight = "900"
}        
efeitopos.onclick = function(){
    clicked.style.borderBottom = "none"
    clicked.style.fontWeight= "400"
    clicked = efeitopos
    efeitopos.style.borderBottom = "1px solid #FFF"
    efeitopos.style.fontWeight = "900"
}
carac.onclick = function(){
    clicked.style.borderBottom = "none"
    clicked.style.fontWeight= "400"
    clicked = carac
    carac.style.borderBottom = "1px solid #FFF"
    carac.style.fontWeight = "900"
}