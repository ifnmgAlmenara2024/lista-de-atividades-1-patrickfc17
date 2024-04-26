const moedasSuportadas = ['BRL', 'USD', 'EUR', 'GBP'] as const;

type MoedasSuportadas = (typeof moedasSuportadas)[number];
type TaxasRegiao = {
  [k in MoedasSuportadas]: number;
};
type Taxas = {
  [k in MoedasSuportadas]: TaxasRegiao;
};

const taxasBrasil = {
  BRL: 1,
  USD: 0.2,
  EUR: 0.18,
  GBP: 0.16,
} satisfies TaxasRegiao;

const taxasEstadosUnidos = {
  BRL: 5.12,
  USD: 1,
  EUR: 0.93,
  GBP: 0.8,
} satisfies TaxasRegiao;

const taxasEuropa = {
  BRL: 5.47,
  USD: 1.07,
  EUR: 1,
  GBP: 0.86,
} satisfies TaxasRegiao;

const taxasReinoUnido = {
  BRL: 6.39,
  USD: 1.25,
  EUR: 1.17,
  GBP: 1,
} satisfies TaxasRegiao;

const taxas = {
  BRL: taxasBrasil,
  USD: taxasEstadosUnidos,
  EUR: taxasEuropa,
  GBP: taxasReinoUnido,
} satisfies Taxas;

function assertIsMoedaValida(
  valor: unknown,
): asserts valor is MoedasSuportadas {
  if (
    !valor ||
    typeof valor !== 'string' ||
    !(moedasSuportadas as ReadonlyArray<string>).includes(valor)
  ) {
    window.alert('Moeda não suportada!');
    throw new Error();
  }
}

const valoresOrigem = window
  .prompt('Digite o valor de origem (Ex.: BRL 27.99): ')
  ?.trim()
  .split(' ');

if (!valoresOrigem || valoresOrigem.length !== 2) {
  window.alert('Valor inválido');
  throw new Error();
}

const [moedaOrigem, valorBruto] = valoresOrigem;
const valorDecimal = parseFloat(valorBruto);

assertIsMoedaValida(moedaOrigem);

if (isNaN(valorDecimal)) {
  window.alert('Valor inválido');
  throw new Error();
}

const moedaDestino = window
  .prompt('Digite a moeda de destino (Ex.: USD): ')
  ?.trim();

assertIsMoedaValida(moedaDestino);

const valorConvertido = valorDecimal * taxas[moedaOrigem][moedaDestino];
const valorFormatado = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: moedaDestino,
}).format(valorConvertido);

window.alert(`Valor convertido: ${valorFormatado}`);
