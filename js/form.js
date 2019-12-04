var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("fui clicado");

    var form = document.querySelector("#form-adiciona");
    var paciente = obterPacienteDoForm(form);
    
    var pacienteTr = montarTr(paciente);
    
    var erros = validarPaciente(paciente);

    if(erros.length > 0){
        exibirMensagensDeErro(erros);
        return;
    }


    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

    form.reset();
});

function exibirMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obterPacienteDoForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    };
    
    return paciente;
}

function montarTr(paciente){
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montarTd(dado, classe){
    var td = document.createElement("td");

    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validarPaciente(paciente){

    erros = []

    if(paciente.nome.length == 0){
        erros.push("O nome nao pode ser em branco");
    }

    if(!validarPeso(paciente.peso)){
        erros.push("O peso e invalido");
    }

    if(!validarAltura(paciente.altura)){
        erros.push("A altura e invalida");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura nao pode ser em branco");
    }

    if(paciente.peso.length == 0){
        erros.push("O peso nao pode ser em branco");
    }

    if(paciente.altura.length == 0){
        erros.push("A altura nao pode ser em branco");
    }

    return erros;
}