document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('login-error');
  
    const userValido = "admin";
    const senhaValida = "1234";
  
    if (username === userValido && password === senhaValida) {
      window.location.href = "eventos.html";
    } else {
      error.textContent = "Usuário ou senha incorretos!";
    }
  });
  