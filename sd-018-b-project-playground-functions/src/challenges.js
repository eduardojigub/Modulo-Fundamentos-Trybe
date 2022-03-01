// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  let status;
  if (a && b) {
    status = true;
  } else {
    status = false;
  }
  return status;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  let areaTriangulo = (base * altura) / 2;

  return areaTriangulo;
}

// Desafio 3
function splitSentence(arrEmStrings) {
  // seu código aqui
  return arrEmStrings.split(' ');
  // fonte usada como consulta https://blog.betrybe.com/javascript/javascript-split/
}

// Desafio 4
function concatName(concatStrings) {
  // seu código aqui
  return concatStrings[concatStrings.length - 1].concat(', ', concatStrings[0]);
  // fonte usada para consulta https://www.w3schools.com/JSREF/jsref_concat_string.asp
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontosTotais = (wins * 3) + (ties * 1);
  return pontosTotais;
}

// Desafio 6
function highestCount(list) {
  // seu código aqui -  fonte https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max;
  let contagem = 0;
  for (let index = 0; index < list.length; index += 1) {
    if (list[index] === Math.max.apply(null, list)) {
      contagem += 1;
    }
  }
  return contagem;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let DistanciaA = Math.abs(mouse - cat1);
  let DistanciaB = Math.abs(mouse - cat2);

  if (DistanciaA < DistanciaB) {
    return 'cat1';
  // eslint-disable-next-line no-else-return
  } else if (DistanciaB < DistanciaA) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(arrayDeNumeros) {
  // seu código aqui
  let array = [];

  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] % 3 === 0 && arrayDeNumeros[i] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (arrayDeNumeros[i] % 3 === 0) {
      array.push('fizz');
    } else if (arrayDeNumeros[i] % 5 === 0) {
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(anyString) {
  // seu código aqui - fonte https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  let codificado = '';
  codificado += anyString.replace(/a/gi, 1).replace(/e/gi, 2).replace(/i/gi, 3).replace(/o/gi, 4).replace(/u/gi, 5);
  return codificado;
}
function decode(anyString) {
  // seu código aqui-
  let decodificado = '';
  // eslint-disable-next-line max-len
  decodificado += anyString.replace(/1/gi, 'a').replace(/2/gi, 'e').replace(/3/gi, 'i').replace(/4/gi, 'o').replace(/5/gi, 'u');
  return decodificado;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
