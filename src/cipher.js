function encode(offset, string) {
  let resultado = '';

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    // Verifica se o caractere é uma letra maiúscula
    if (char.match(/[A-Z]/)) {
      const code = string.charCodeAt(i);
      const letraCifrada = String.fromCharCode(((code - 65 + offset) % 26) + 65);
      resultado += letraCifrada;
    } else {
      resultado += char;
    }
  }

  return resultado;
}

// Função para descriptografar a mensagem
function decode(offset, string) {
  let resultado = '';

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    // Verifica se o caractere é uma letra maiúscula
    if (char.match(/[A-Z]/)) {
      const code = string.charCodeAt(i);
      const letraDecifrada = String.fromCharCode(((code - 65 - offset + 26) % 26) + 65);
      resultado += letraDecifrada;
    } else {
      resultado += char;
    }
  }

  return resultado;
}

export { encode, decode };