
import {users} from '../server/users.js'
import {request} from './log.js'


const dados = {
    username: 'Cassio',
    password: '12345678'
}

const requisicao1 = {
    type: 'login',
    data: dados
}

const datacadastro = {
    username: 'Nicolle',
    email: "nwieira59@gmail.com",
    password: '12345678'
}

const requisicao2 = {
    type: 'cadastro',
    data: datacadastro
}

function direcionarReq(requisicao){
    if(requisicao.type === 'login'){
        return (autenticarlogin(requisicao.data,users))
    } else if(requisicao.type === 'cadastro'){
        return (fazerCadastro(requisicao.data,users))
    } 
}

function fazerCadastro(obj,users){
    const userMap = users.map(function(el){return el.username})
    const emailMap = users.map(function(el){return el.email})
    if(userMap.includes(obj.username)){
        return('Username already exists!')
    }
    else if(emailMap.includes(obj.email)){
        return('This email already exists!')
    }
    else {
        users.push(obj)
        return('Cadastro Efetuado com Sucesso')
    }
}

function autenticarlogin(obj,users){
    const userMap = users.map(function(el){return el.username})
    const passwordMap = users.map((function(el){return el.password}))
    if(userMap.includes(obj.username)){
        const local = userMap.indexOf('Cassio')
        if(obj.password === passwordMap[local]){
            console.log('autenticacao concluida com sucesso!')
            const login = "Succed"
            return(login)
        }
        else {
            console.log('Falha na autenticacao!')
            const login = "Failed"
            return(login)
        }
        
    } 
}

console.log(request[0])

direcionarReq(request[0])