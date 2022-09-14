input = document.getElementById('inputs')
title = 'title1'

function createInput(title,insidetext,outsidetext,type){
    page =  '<h4>' + outsidetext + '</h4>'+'<input type= ' + type + 'id= ' + title + 'placeholder= ' + insidetext +'/>'
    input.insertAdjacentHTML('beforeend', page)
}
createInput("username","coloque um nome", "Nome de Usuário", 'text')
createInput("password","coloque sua senha aqui", "Senha", "text")