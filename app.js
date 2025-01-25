let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; 
let numeroMaximo = 10;  
//variables establecidas

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); 
elementoHTML.innerHTML = texto;
return; //texto arriba de la caja
}
function verificarIntento() { 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
   console.log(intentos);
    if (numeroDeUsuario == numeroSecreto) { 
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`); //cambio del mensaje al ganar
        document.getElementById('reiniciar').removeAttribute('disabled'); //activacion del boton nuevo juego cuando ganas
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) { //pistas
            asignarTextoElemento('p','El número secreto es menor'); 
        } else { 
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++; 
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
      document.querySelector('#valorUsuario').value = '';
    }
 
function generarNumeroSecreto() {
let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1; //genera un numero aleatorio, lo redondea, lo multiplica por el numero maximo y le suma 1 
console.log(numeroGenerado);
console.log(listaNumerosSorteados);
//si ya sorteamos todos los numeros
if (listaNumerosSorteados.length == numeroMaximo) { 
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto(); //llamada recursiva
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}
function condicionesIniciales() {
asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto ();
intentos = 1;
}
function reiniciarJuego() {
    //limpiar caja
   limpiarCaja();
    //Indicar mensaje de intervalo de números
    //generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego 
document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();

