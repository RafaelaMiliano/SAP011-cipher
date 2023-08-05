import cipher from './cipher.js';

// Função para atualizar o campo de mensagem com a mensagem criptografada
function atualizarResultado(mensagem) {
  document.getElementById('mensagem').value = mensagem;
}

// Função para converter o texto para maiúsculas
function converterParaMaiusculas() {
  const mensagemTextarea = document.getElementById('mensagem');
  mensagemTextarea.value = mensagemTextarea.value.toUpperCase();
}

// Função para criptografar a mensagem
function criptografar() {
  const mensagem = document.getElementById('mensagem').value;
  const offset = parseInt(document.getElementById('offset').value);
  const mensagemCriptografada = cipher.encode(offset, mensagem);
  atualizarResultado(mensagemCriptografada);
}

// Função para descriptografar a mensagem
function descriptografar() {
  const mensagemCriptografada = document.getElementById('resultado').value;
  const offset = parseInt(document.getElementById('offset').value);
  const mensagemDescriptografada = cipher.decode(offset, mensagemCriptografada);

  // Atualiza o campo de resultado com a mensagem descriptografada
  atualizarResultado(mensagemDescriptografada);
}


// Adiciona o ouvinte de evento para converter para maiúsculas
document.getElementById('mensagem').addEventListener('input', converterParaMaiusculas);

// Adiciona os ouvintes de evento aos botões
document.getElementById('botao-criptografar').addEventListener('click', criptografar);
document.getElementById('botao-descriptografar').addEventListener('click', descriptografar);