class MembrosView{

    constructor(elemento){
        this._elemento = elemento;
    }

    template(model){
        console.log(model);
        return `
            <table>
                <tbody>

                    ${model.membros.map(n => `
                        <tr>
                            <td id="lista-de-membros">${n.acesso}: ${n.nome}</td>
                        </tr>
                        
                        `).join('')}
                </tbody>
            </table>
            `}

    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}

