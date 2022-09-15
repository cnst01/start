import {users} from '../server/users.js'
import {direcionarReq} from '../server/autenticacao.js'
import {autenticarlogin} from '../server/autenticacao.js'
import {fazerCadastro} from '../server/autenticacao.js'

const voltar = document.getElementById("voltar");
voltar.addEventListener("click", function(){
    window.location.replace('../index.html')
});

var name = null
var pass = null

const enviar = document.getElementById('login')
enviar.addEventListener('click', function(){
    name = document.getElementById('username').value
    pass = document.getElementById('password').value
    const dados = {username: name, password: pass}
    const request = {type:'login',data:dados}
    console.log('Trying login with: ' + name + ' , ' + pass)
    direcionarReq(request)
})







