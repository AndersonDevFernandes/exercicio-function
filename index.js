function adicionarNumero(numero) {
  document.getElementById('resultado').value += numero;
}

function adicionarOperador(operador) {
  document.getElementById('resultado').value += operador;
}

function calcular() {
  let resultado = eval(document.getElementById('resultado').value);
  document.getElementById('resultado').value = resultado;

}

function limpar() {
  document.getElementById('resultado').value = '';
}



// document.getElementById(toggleMode).addEventListener("click", function () {
//  document.body.classList.toggle("dark-mode")
// })

function myFunction(){
  let element = document.body
  element.classList.toggle("dark-mode")
}