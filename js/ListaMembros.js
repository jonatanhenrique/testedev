class ListaMembros {

    constructor(){
        this._membros = []
    }

    adiciona(membros){
        this._membros.push(membros);
    }

    get membros(){

        return [].concat(this._membros);
    }

}