const host = '192.168.0.161/api';
const endpoint = host + '/Massa'

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
                            <td>${e.queijos}</td>
                         </tr>`;
                corpo.innerHTML += linha;
        });
    }
}

function Salvar(){
    let request = new XMLHttpRequest();
    request.open('POST', endpoint);
    request.send();
    let id = JSON.parse(document.getElementById("id"));
    let tipo = JSON.parse(document.getElementById("tipo"));
    let molho = JSON.parse(document.getElementById("molho"));
    let queijos = JSON.parse(document.getElementById("queijos"));
    massa = {"id":id,"tipo":tipo,"molho":molho,"queijos":queijos};
    endpoint.push(massa);
    listar()
}

