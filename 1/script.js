function imcMessage(imc) {
    if (imc < 18.5)
        return 'Abaixo do peso';
    if (imc < 25)
        return 'Peso normal';
    if (imc < 30)
        return 'Sobrepeso';
    if (imc < 35)
        return 'Obesidade grau 1';
    if (imc < 40)
        return 'Obesidade grau 2 (severa)';
    return 'Obesidade grau 3 (mórbida)';
}
const peso = Number(window.prompt('Informe seu peso: '));
const altura = Number(window.prompt('Informe sua altura: '));
const imc = peso / altura ** 2;
if (isNaN(imc))
    window.alert('Valores inválidos');
else
    window.alert(`IMC ${imc.toFixed(1)}: ${imcMessage(imc)}`);
export {};
