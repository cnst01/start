const voltar = document.getElementById("voltar");
voltar.addEventListener("click", function(){
    window.location.replace('../index.html')
});

const enviar = document.getElementById('login')
enviar.addEventListener('click', function(){
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    console.log('Trying login with: ' + username + ' , ' + password)
})