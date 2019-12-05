var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    var alvoEvento = event.target;
    var paiDoALvo = alvoEvento.parentNode;
    if(alvoEvento.tagName == "TD"){
        paiDoALvo.classList.add("fadeOut");
        console.log(alvoEvento.tagName)
        
        setTimeout(function(){
        paiDoALvo.remove();    
        }, 500);
    }
    

    
});

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log("fui clicado com duplo clique");
//         this.remove();
//     });
// });