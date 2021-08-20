const host = 'http://localhost/api';
const endpoint = host + '/'

function listar(){
    let request = new XMLHttpRequest();
    request.open('GET', endpoint);
    request.send();
    request.onload = function(){
        let Massas = JSON.parse(this.responseText);
        let tabela =  
    }
}