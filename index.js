const hojas = document.querySelectorAll(".hoja")
const estanque = document.querySelector(".estanque")
const boton = document.querySelector("button")

console.log(hojas)
console.log(estanque)

boton.addEventListener("click", function () {
    console.log(hojas)
    saltar()
   // hojas[2].classList.add("rana")
})

function saltar() {
    // const destino = localizar(estanque,"rana")
    /*const laHojaAnterior = 1
    const laOtraHoja = 2
    if(hojas[laHojaAnterior].classList.contains('rana')){
        hojas[laHojaAnterior].classList.remove('rana')
        hojas[laOtraHoja].classList.add('rana')
    } else {
        hojas[laHojaAnterior].classList.add('rana')
        hojas[laOtraHoja].classList.remove('rana')
    }*/

    const ubiRana = localizar(hojas);
    console.log(ubiRana)
    if (ubiRana > -1 && ubiRana < hojas.length - 1) {
        hojas[ubiRana].classList.remove('rana')
        hojas[ubiRana + 1].classList.add('rana')
    } else {
        hojas[hojas.length - 1].classList.remove('rana')
        hojas[0].classList.add('rana')
    }
}

function localizar(espacio) {
    for (let i = 0; i < espacio.length; i++) {
        if (espacio[i].classList.contains('rana')) {
            return i;
        }
    }
}
