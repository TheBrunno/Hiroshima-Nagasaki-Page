const local = document.getElementById("local")
const ocorrido = document.getElementById("ocorrido")
const motivo = document.getElementById("motivo")
const efeito = document.getElementById("efeito")
const efeitopos = document.getElementById("efeitopos")
const carac = document.getElementById("carac")
var clicked = local
local.onclick = function(){
    clicked.style.backgroundColor = "inherit"
    clicked.style.fontWeight= "400"
    clicked = local
    local.style.backgroundColor = "rgba(0, 0, 0, 0.08)"
    local.style.fontWeight = "900"
    }
ocorrido.onclick = function(){
    clicked.style.backgroundColor = "inherit"
    clicked.style.fontWeight= "400"
    clicked = ocorrido
    ocorrido.style.backgroundColor = "rgba(0, 0, 0, 0.08)"
    ocorrido.style.fontWeight = "900"
}        
motivo.onclick = function(){
    clicked.style.backgroundColor = "inherit"
    clicked.style.fontWeight= "400"
    clicked = motivo
    motivo.style.backgroundColor = "rgba(0, 0, 0, 0.08)"
    motivo.style.fontWeight = "900"
}        
efeito.onclick = function(){
    clicked.style.backgroundColor = "inherit"
    clicked.style.fontWeight= "400"
    clicked = efeito
    efeito.style.backgroundColor = "rgba(0, 0, 0, 0.08)"
    efeito.style.fontWeight = "900"
}        
efeitopos.onclick = function(){
    clicked.style.backgroundColor = "inherit"
    clicked.style.fontWeight= "400"
    clicked = efeitopos
    efeitopos.style.backgroundColor = "rgba(0, 0, 0, 0.08)"
    efeitopos.style.fontWeight = "900"
}
carac.onclick = function(){
    clicked.style.backgroundColor = "inherit"
    clicked.style.fontWeight= "400"
    clicked = carac
    carac.style.backgroundColor = "rgba(0, 0, 0, 0.08)"
    carac.style.fontWeight = "900"
}