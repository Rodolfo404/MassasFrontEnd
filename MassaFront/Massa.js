const host = 'http://localhost/api';
const endpoint = host + '/'

function listar(){
    let request = new XMLHttpRequest();
    request.open('GET', endpoint);
    request.send();
    request.onload = function(){
        let massas = JSON.parse(this.responseText);
        let tabela = document.getElementById("tabela-massa");
        let corpo = tabela.getElementsByTagName("tbody")[0];
        corpo.innerHTML = "" ;
        massas.forEach(e => {
            let linha = `<tr>
                            <td>${e.id}</td>
                            <td>${e.tipo}</td>
                            <td>${e.molho}</td>
                            <td>${e.queijo}</td>
                         </tr>`;
                corpo.innerHTML += linha;
        });
    }
}