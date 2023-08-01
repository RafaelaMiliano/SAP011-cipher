function encode(offset, string) {
  let resultado = '';

  // Converte a string para letras maiúsculas
  const upperCaseString = string.toUpperCase();

  for (let i = 0; i < upperCaseString.length; i++) {
    const char = upperCaseString[i];

    // Verifica se o caractere é uma letra maiúscula
    if (char.match(/[A-Z]/)) {
      const code = upperCaseString.charCodeAt(i);
      const letraCifrada = String.fromCharCode(((code - 65 + offset) % 26) + 65);
      resultado += letraCifrada;
    } else {
      resultado += char;
    }
  }

  return resultado;
}

function decode(offset, string) {
  let resultado = '';

  // Converte a string para letras maiúsculas
  const upperCaseString = string.toUpperCase();

  for (let i = 0; i < upperCaseString.length; i++) {
    const char = upperCaseString[i];

    // Verifica se o caractere é uma letra maiúscula
    if (char.match(/[A-Z]/)) {
      const code = upperCaseString.charCodeAt(i);
      const letraDecifrada = String.fromCharCode(((code + 65 - offset) % 26) + 65);
      resultado += letraDecifrada;
    } else {
      resultado += char;
    }
  }

  return resultado;
}

const cipher = {
  encode,
  decode
};

export default cipher;