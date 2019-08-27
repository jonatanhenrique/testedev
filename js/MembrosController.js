class MembrosController{

    constructor(){

        let $ = document.querySelector.bind(document);

        this._inputNome = $('#nome');
        this._inputEmail = $('#email');
        this._inputDep = $('#departamento');
        this._inputAcesso = $('#nivelAcesso'); 
        this._listaMembros = new ListaMembros();
        this._membrosView = new MembrosView($('#membros-view'));

        this._membrosView.update(this._listaMembros);

    }

    adiciona(event){
        event.preventDefault();
        this._listaMembros.adiciona(this._criaMembros());
        this._membrosView.update(this._listaMembros);
        this._limpaFormulario();
        
    }

    _criaMembros(){
        return new Membros(
            this._inputNome.value,
            this._inputEmail.value,
            this._inputDep.value,
            this._inputAcesso.value);
    }

    _limpaFormulario(){
        this._inputNome.value = '';
        this._inputEmail.value = '';
        this._inputDep.value = '';

        this._inputNome.focus();
    }
}