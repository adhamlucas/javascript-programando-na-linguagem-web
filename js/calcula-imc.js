var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");

console.log("tamanho do array" + pacientes.length);


for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = validarPeso(peso);
    var alturaEhValida = validarAltura(altura);
   
    if(!pesoEhValido){
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso invalido";
        paciente.classList.add("paciente-invalido")
    }
     
    if(!alturaEhValida){
        console.log("Altura invalida");
        alturaEhValida = false;
        tdImc.textContent = "Altura Invalida";
        paciente.classList.add("paciente-invalido");
    }
    
    if(alturaEhValida && pesoEhValido){
        tdImc.textContent = calcularImc(peso, altura);
    }
}

function calcularImc(peso, altura){
    var imc = 0;
    var imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validarPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true;
    }
    else{
        return false;
    }
}

function validarAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }
    else{
        return false;
    }
}