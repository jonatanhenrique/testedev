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
                            <td id="lista-de-membros"><b>${n.acesso}:</b> ${n.nome} 
                            <button id="remover" type="remove"><p class="botao-cancelar"><b>x</b></p></button></td>
                        </tr>
                        
                        `).join('')}
                </tbody>
            </table>
            `}

    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}

