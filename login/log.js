import {direcionarReq} from '../server/autenticacao.js'
import {users} from '../server/users.js'

const voltar = document.getElementById("voltar");
voltar.addEventListener("click", function(){
    window.location.replace('../index.html')
});

const enviar = document.getElementById('login')
enviar.addEventListener('click', function(){
    const name = document.getElementById('username').value
    const pass = document.getElementById('password').value
    const dados = {username: name, password: pass}
    const request = {type:'login',data:dados}
    console.log('Trying login with: ' + name + ' , ' + pass)
    alert(direcionarReq(request,users))
})







