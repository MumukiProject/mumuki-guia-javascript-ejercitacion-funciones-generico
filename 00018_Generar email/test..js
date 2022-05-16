it("Si hacemos generarEmail('adalovelace', 'gmail') debería retornar 'adalovelace@gmail.com'", function() {
  let resultado = generarEmail('adalovelace', 'gmail')
  assert.equal(resultado, 'adalovelace@gmail.com',`generarEmail('adalovelace', 'gmail') debería retornar adalovelace@gmail.com pero fue ${resultado}`);
})

it("Si hacemos generarEmail('alfonsinaStorni', 'gmail') debería retornar 'alfonsinaStorni@gmail.com'", function() {
  let resultado = generarEmail('alfonsinaStorni', 'gmail')
  assert.equal(resultado, 'alfonsinaStorni@gmail.com',`generarEmail('alfonsinaStorni', 'gmail') debería retornar alfonsinaStorni@gmail.com pero fue ${resultado}`);
})