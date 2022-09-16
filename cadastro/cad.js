import {direcionarReq} from '../server/autenticacao.js'
import {users} from '../server/users.js'

const voltar = document.getElementById("voltar");
voltar.addEventListener("click", function(){
    window.location.replace('../index.html')
});

const cadastrar = document.getElementById('cadastrar')
cadastrar.addEventListener('click', function(){
    const name = document.getElementById('username').value
    const pass = document.getElementById('password').value
    const email = document.getElementById('email').value
    const dados = {username: name, email: email, password: pass}
    const request = {type:'cadastro',data:dados}
    console.log('Obtendo cadastro com: ' + name + ' , ' + pass)
    alert(direcionarReq(request,users))
})