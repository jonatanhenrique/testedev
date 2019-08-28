let form;
let bSalvar;
let bCancelar;
let goOrg;
let sendInvite;
let addMember;
let divTable;

window.onload = function(){
    form = document.getElementById("form-adiciona");
    bSalvar = document.getElementById("salvar");
    bCancelar = document.getElementById("cancelar");
    goOrg = document.getElementById("go-org");
    sendInvite = document.getElementById("send-invite");
    addMember = document.getElementById("add-member");
    divTable = document.getElementById("membros-view")

    form.classList.add("escondido");
    bSalvar.classList.add("escondido");
    bCancelar.classList.add("escondido");
    sendInvite.classList.add("escondido");
    divTable.classList.add("escondido");
    
    addMember.onclick = segundaPaginaView;
}

function segundaPaginaView(){
    form.classList.remove("escondido");
    bSalvar.classList.remove("escondido");
    bCancelar.classList.remove("escondido");
    divTable.classList.remove("escondido");
    
    sendInvite.classList.add("escondido");
    goOrg.classList.add("escondido");
    addMember.classList.add("escondido");

    bSalvar.onclick = terceiraPaginaView;

}

function terceiraPaginaView(){
    form.classList.add("escondido");
    bSalvar.classList.add("escondido");
    bCancelar.classList.add("escondido");

    addMember.classList.remove("escondido");
    sendInvite.classList.remove("escondido");
    
}