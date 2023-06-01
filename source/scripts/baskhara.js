function calculaBhaskara(a, b, c) {
  const delta = b ** 2 - 4 * a * c;

  if (delta < 0) {
    return "A equação não possui raízes reais.";
  }

  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);

  const raizes = `A primeira raiz é ${x1} e a segunda raiz é ${x2}`;
  return raizes;
}

console.log(calculaBhaskara(12, 12, -8));
