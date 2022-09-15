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
    console.log('Trying login with: ' + name + ' , ' + pass)
})

console.log(request)

export const request = {
    username: name,
    password: pass
}



