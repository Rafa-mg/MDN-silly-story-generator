const nombre = document.querySelector('#customname')
const boton = document.querySelector('.randomize')

boton.addEventListener('click', imprimir)

function imprimir () {
    console.log(nombre.value)
}