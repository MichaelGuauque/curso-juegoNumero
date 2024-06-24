let numeroSecreto = 0;
let intentos = 1;
let numeroMaximo = 10;
let listaNumeroSecretos = [];

function validarNumero(){
    let numeroUsuario = parseInt(document.getElementById('intentoUsuario').value);
    if(numeroUsuario === numeroSecreto){
        asignarElementoHTML('p',`¡Felicidades! acertaste el número en ${intentos} ${(intentos === 1) ? 'intento.' :'intentos.'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroUsuario < numeroSecreto){
            asignarElementoHTML('p', 'El número es mayor');
        }else{
            asignarElementoHTML('p','El número es menor');
        }
        limpiarCaja('intentoUsuario');
        intentos++;
    }
}

function limpiarCaja(id){
    document.getElementById(id).value = '';
}

function asignarElementoHTML(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}



function generarNumeroSecreto(){
    let numero = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numero);
    console.log(listaNumeroSecretos);
    //si todos los numeros ya se jugaron
    if(listaNumeroSecretos.length == numeroMaximo){
        asignarElementoHTML('p', 'Ups, ya se jugaron todos los números');
        console.log('prueba pedorra');
    }else{
        //si el numero ya se jugó, genere uno nuevo
        if(listaNumeroSecretos.includes(numero)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSecretos.push(numero);
            return numero
        }
    }
    
}

function condicionesIniciales(){
    asignarElementoHTML('h1','Juego del número secreto');
    asignarElementoHTML('p', `Digite un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function nuevoJuego(){
    condicionesIniciales();
    limpiarCaja('intentoUsuario');
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();