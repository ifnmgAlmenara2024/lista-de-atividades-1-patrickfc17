'use strict';
function mainAreaTriangulo() {
  const baseTriangulo = Number(window.prompt('Informe a base do retângulo: '));
  const alturaTriangulo = Number(
    window.prompt('Informe a altura do retângulo: '),
  );
  const area = baseTriangulo * alturaTriangulo;
  if (isNaN(area)) window.alert('Valores inválidos');
  else window.alert(`A área do retângulo é ${area}`);
}
document.body.onload = _ => {
  while (true) mainAreaTriangulo();
};
