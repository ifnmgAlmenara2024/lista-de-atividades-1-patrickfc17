const base = Number(window.prompt('Informe a base do retângulo: '));
const altura = Number(window.prompt('Informe a altura do retângulo: '));
const area = base * altura;

if (isNaN(area)) window.alert('Valores inválidos');
else window.alert(`A área do retângulo é ${area}`);

export {};
