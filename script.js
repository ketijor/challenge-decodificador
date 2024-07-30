const btCriptografar = document.querySelector('[data-criptografar]');
const btDescriptografar = document.querySelector('[data-descriptografar]');
const btCopiar = document.querySelector('[data-copiar]');

const textoEntrada = document.querySelector('textarea[name="texto-entrada"]');
const textoSaida = document.querySelector('textarea[name="texto-saida"]');


function criptografar() {
  const textoDigitado = textoEntrada.value;
  // console.log(textoDigitado);

  let textoMostrado = textoDigitado.toLowerCase().replace(/[^a-z\s]/g, ''); // (/[^\w\s]/gi, '')

  textoMostrado = textoMostrado.replaceAll('e', 'enter');
  textoMostrado = textoMostrado.replaceAll('i', 'imes');
  textoMostrado = textoMostrado.replaceAll('a', 'ai');
  textoMostrado = textoMostrado.replaceAll('o', 'ober');
  textoMostrado = textoMostrado.replaceAll('u', 'ufat');
  // console.log(textoMostrado);
  
  // return textoMostrado;

  document.querySelector(".principal__saida__container").style.display = "none";
  document.querySelector(".principal__saida__conteudo").style.display = "flex";

  textoSaida.value = textoMostrado;

  if (textoDigitado == '') {
    document.querySelector(".principal__saida__container").style.display = "flex";
    document.querySelector(".principal__saida__conteudo").style.display = "none";
  }
}

function descriptografar() {
  const textoDigitado = textoEntrada.value;
  // console.log(textoDigitado);

  let textoMostrado = textoDigitado.toLowerCase().replace(/[^a-z\s]/g, '');

  textoMostrado = textoMostrado.replaceAll('enter', 'e');
  textoMostrado = textoMostrado.replaceAll('imes', 'i');
  textoMostrado = textoMostrado.replaceAll('ai', 'a');
  textoMostrado = textoMostrado.replaceAll('ober', 'o');
  textoMostrado = textoMostrado.replaceAll('ufat', 'u');
  // console.log(textoMostrado);

  document.querySelector(".principal__saida__container").style.display = "none";
  document.querySelector(".principal__saida__conteudo").style.display = "flex";

  textoSaida.value = textoMostrado;

  if (textoDigitado == '') {
    document.querySelector(".principal__saida__container").style.display = "flex";
    document.querySelector(".principal__saida__conteudo").style.display = "none";
  }
}

function copiar() {
  let textoCopia = textoSaida.value;
  navigator.clipboard.writeText(textoCopia);
}

btCriptografar.addEventListener('click', criptografar);
btDescriptografar.addEventListener('click', descriptografar);
btCopiar.addEventListener('click', copiar);
