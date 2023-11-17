function converter() {
  var valorEmDolar = document.getElementById("valor-dolar").value;
  var cotacaoDoDolar = 4.9092;
  var valorEmReal = valorEmDolar * cotacaoDoDolar;

  alert("US$ " + valorEmDolar + " = R$ " + valorEmReal.toFixed(2));
}