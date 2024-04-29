'use strict';
function mainConversaoTemperaturas() {
  const temperatura = parseFloat(
    window.prompt('Digite a temperatura em Celsius: '),
  );
  if (isNaN(temperatura)) {
    window.alert('Valor inválido');
    throw new Error();
  }
  const fahrenheit = temperatura * 1.8 + 32;
  window.alert(`Esta temperatura em Fahrenheit é: ${fahrenheit.toFixed(1)} ºF`);
}
document.body.onload = _ => {
  while (true) mainConversaoTemperaturas();
};
