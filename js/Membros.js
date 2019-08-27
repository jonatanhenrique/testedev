class Membros{
    constructor(nome, email, departamento, acesso){
        this._nome = nome;
        this._email = email;
        this._departamento = departamento;
        this._acesso = acesso;
    }
    
    get nome() {
        return this._nome;
    }
    
    get Email(){
        return this._email;
    }
    
    get Departamento(){
        return this._departamento;
    }
    
    get Acesso(){
        return this._acesso;
    }
}

