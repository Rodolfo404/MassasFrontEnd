const host = 'http://192.168.0.124/api';
const endpoint = host + '/Massa'

function create(model){
    let request = new XMLHttpRequest();
    request.open('POST', endpoint);
    request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    request.send(JSON.stringify(model));
    request.onload = function(){
        console.log(request.status);
    }
}
function list_all(){
    let request = new XMLHttpRequest();
    request.open('GET', endpoint);
    request.send();
    request.onload = function (){
        console.log(request.status);
        let lista = JSON.parse(this.responseText);
        console.log(lista);
        Carrega_tabela(lista);
    }
}

function Carrega_tabela(lista){
    
    let tabela = document.getElementById("tabela-massa");
    let corpo = tabela.getElementsByTagName("tbody")[0];
    corpo.innerHTML = "" ;
    lista.forEach(e => {
        let linha = `<tr>
        <td>${e.id}</td>
        <td>${e.tipo}</td>
        <td>${e.molho}</td>
        <td>${e.queijos}</td>
        <td><a href="editar.html?id=${e.id}">Editar</a></td>
        <td><a href onclick="del(${e.id})">Deletar</a></td>
        </tr>`;
        corpo.innerHTML += linha;
    });
}

function read_by_id(id){
    let request = new XMLHttpRequest();
    request.open('GET', endpoint + '/'+id);
    request.send();
    request.onload = function(){
        console.log(request.status);
        carrega_form(JSON.parse(this.responseText));
    }
}

function update(model){
    let request = new XMLHttpRequest();
    request.open('PUT', endpoint + '/'+model.id);
    request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    request.send(JSON.stringify(model));
    request.onload = function(){
        console.log(request.status);
    }
}

function del(id){
    let request = new XMLHttpRequest();
    request.open('DELETE', endpoint + '/'+id);
    request.send();
    request.onload = function(){
        console.log(request.status);
        window.location = 'index.html';
    }
}




function cadastrar(){
    
    let tipo = document.getElementById("tipo").value;
    let molho = document.getElementById("molho").value;
    let queijos = document.getElementById("queijos").value;
    let model = {"tipo":tipo,"molho":molho,"queijos":queijos};
    create(model);
}

function carrega_form(model){
    document.getElementById("id").value = model.id;
    document.getElementById("tipo").value = model.tipo;
    document.getElementById("molho").value = model.molho;
    document.getElementById("queijos").value = model.queijos;
}

function editar(){
    let id = document.getElementById("id").value;
    let tipo = document.getElementById("tipo").value;
    let molho = document.getElementById("molho").value;
    let queijos = document.getElementById("queijos").value;
    let model = {"id":id, "tipo":tipo, "molho":molho, "queijos": queijos};
    update(model);
}

