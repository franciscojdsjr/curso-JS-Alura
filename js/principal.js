	
var titulo = document.querySelector("h1");		
    titulo.textContent = ("Alura Nutrição");

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0 ; i < pacientes.length ; i++) {

    var paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;


    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;


    var tdImc = paciente.querySelector(".info-imc");


    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido) {

        console.log("Peso Invalido");
        pesoEhValido = false;
        tdpeso.textContent = "Peso Invalido";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida) {

        console.log("Altura Inalivda");
        alturaEhValida = false;
        tdaltura.textContent = "Altura Invalida";
        paciente.classList.add("paciente-invalido");
    }

    if(alturaEhValida && pesoEhValido) {
        
        var imc = peso / (altura * altura) ;

            tdImc.textContent = imc.toFixed(2);
    }

}

function calculaImc(peso,altura) {

    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {

    if (peso > 0 && peso < 1000) {
        return true;
    }   else {
        return false;
    }
}
function validaAltura(altura) {
    if (altura > 0 && altura <=3.00) {
        return true;
    }   else {
        return false;
    }
}

