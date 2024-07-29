document.getElementById('formulario').addEventListener('submit', function login (event) {
    event.preventDefault();
   
    var user = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;
   
    if (user === "Lari" && senha === "3456"){
        alert('sucesso');
        location.href = "home.html";  
    } else {
        alert('usuario ou senha incorreto');
    }
    });