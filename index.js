const hojas = document.querySelectorAll(".hoja")
const boton = document.querySelector("button")

let localizacion = 0;
let retroceder = false;

boton.addEventListener("click", function () {
    console.log(hojas)
    saltar()
})

function saltar() {
    const destino = calcularDestino()
    hojas[localizacion].classList.remove('rana') // este es el destino
    hojas[destino].classList.add('rana')
    localizacion = destino

    //estoy en el inicio tenemos que cambiar la direccion

    if(localizacion === 0) {
        retroceder = false
    }

    //estoy en el final tenemos que regresar

    if(localizacion === hojas.length - 1){ 
        retroceder = true
    }
}

function calcularDestino(){
    if(retroceder){
        return localizacion - 1
    }

    return localizacion + 1
}

hojas[localizacion].classList.add('rana')
