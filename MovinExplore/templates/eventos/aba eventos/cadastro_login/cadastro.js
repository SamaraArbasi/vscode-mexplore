// cadastro.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const emailInput = document.getElementById('email');
  const senhaInput = document.getElementById('senha');
  const confirmarSenhaInput = document.getElementById('confirmar-senha');

  form.addEventListener('submit', function (event) {
    const email = emailInput.value.trim();
    const senha = senhaInput.value;
    const confirmarSenha = confirmarSenhaInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Limpa mensagens anteriores
    document.querySelectorAll('.error-message').forEach(e => e.remove());

    let formValido = true;

    // Validação do email
    if (!emailRegex.test(email)) {
      mostrarErro(emailInput, 'Email inválido.');
      formValido = false;
    }

    // Verificação se senhas são iguais
    if (senha !== confirmarSenha) {
      mostrarErro(confirmarSenhaInput, 'As senhas não coincidem.');
      formValido = false;
    }

    // Se algum erro for encontrado, impede o envio do formulário
    if (!formValido) {
      event.preventDefault();
    }
  });

  // Função para exibir a mensagem de erro logo abaixo do input
  function mostrarErro(input, mensagem) {
    const erro = document.createElement('div');
    erro.className = 'error-message'; // usa a classe que já existe no CSS
    erro.textContent = mensagem;
    input.insertAdjacentElement('afterend', erro);
  }
});
