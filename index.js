/*const textPlano = document.querySelector('#textPlano'); 
const textCrip = document.querySelector('#textCrip'); 

const criptogramaP = document.querySelector('#criptograma'); 
const textDesifradoP = document.querySelector('#textDesi'); */

function encriptar(texto) {
  let alfabeto = "abcdefghijklmnopqrstuvwxyz"; //Contando desde 0 son 26 restando 1 son 25 
  let tablaSustitucion = {}; //Variable con las letras mapeadas a = b, b = c, c = d ...
  for (let i = 0; i < alfabeto.length - 1; i++) { 
    tablaSustitucion[alfabeto[i]] = alfabeto[i+1];
    //console.log(tablaSustitucion[alfabeto[i]] = alfabeto[i+1]); 
  }
  tablaSustitucion[alfabeto[alfabeto.length - 1]] = alfabeto[0];
  //console.log( tablaSustitucion[alfabeto[alfabeto.length - 1]] = alfabeto[0]); 
  //console.log(tablaSustitucion); 
  
  let criptograma = "";

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i]; 
    let letraCifrada = tablaSustitucion[letra] || letra; // Si la letra no está en la tabla, no se cifra
    criptograma += letraCifrada;
  }
  return criptograma;
}//fin encriptar


function desencriptar(criptograma) {
  let alfabeto = "abcdefghijklmnopqrstuvwxyz";
  let tablaSustitucion = {}; //Variable con las letras mapeadas pero ahora de forma Inversa b = a, c = b, d = c ...
  for (let i = 1; i < alfabeto.length; i++) {
    tablaSustitucion[alfabeto[i]] = alfabeto[i-1];
  }

tablaSustitucion[alfabeto[0]] = alfabeto[alfabeto.length - 1];
//console.log(tablaSustitucion); 

  let texto = "";
  for (let i = 0; i < criptograma.length; i++) {
    let letraCifrada = criptograma[i];
    let letra = tablaSustitucion[letraCifrada] || letraCifrada; // Si la letra no está en la tabla, no se descifra
    texto += letra;
  }
  return texto;
}//desencriptar


// Ejemplo de uso:
let textoClaro = "brandon"; 
let criptograma = encriptar(textoClaro);
let textoDesencriptado = desencriptar(criptograma);
console.log("Texto Claro: " + textoClaro);
console.log("Criptograma: " + criptograma);
console.log("Texto Desencriptado: " + textoDesencriptado);