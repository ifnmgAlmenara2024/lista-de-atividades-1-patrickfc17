const moedasSuportadas = ['BRL', 'USD', 'EUR', 'GBP'] as const;

type MoedaEnum = (typeof moedasSuportadas)[number];
type Taxas = {
  [k in MoedaEnum]: number;
};

const taxas = {
  BRL: 1,
  USD: 5.5,
  EUR: 6.5,
  GBP: 7.5,
} satisfies Taxas;

function assertIsMoedaValida(valor: unknown): asserts valor is MoedaEnum {
  if (
    !valor ||
    typeof valor !== 'string' ||
    !(moedasSuportadas as ReadonlyArray<string>).includes(valor)
  ) {
    window.alert('Moeda não suportada!');
    throw new Error();
  }
}

const moedaOrigem = window
  .prompt('Digite o valor de origem (Ex.: BRL 27.99): ')
  ?.trim()
  .split(' ');

if (!moedaOrigem || moedaOrigem.length !== 2) {
  window.alert('Valor inválido');
  throw new Error();
}

const [tipo, valorBruto] = moedaOrigem;
const valorDecimal = parseFloat(valorBruto);

assertIsMoedaValida(tipo);

if (isNaN(valorDecimal)) {
  window.alert('Valor inválido');
  throw new Error();
}

const moedaDestino = window.prompt('Digite a moeda de destino (Ex.: USD): ')?.trim();

assertIsMoedaValida(moedaDestino);

const valorConvertido = valorDecimal * taxas[moedaDestino as MoedaEnum];
const valorFormatado = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: moedaDestino,
}).format(valorConvertido);

window.alert(`Valor convertido: ${valorFormatado}`);
