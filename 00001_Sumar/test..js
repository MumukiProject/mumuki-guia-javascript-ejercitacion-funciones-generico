it("Si hacemos sumar(2, 3) debería retornar 5", function() {
  let resultado = sumar(2,3)
  assert.equal(resultado, 5,`La suma debería retornar 5 pero fue ${resultado}`);
})

it("Si hacemos sumar(1.2, 3.4) debería retornar 4.6", function() {
  let resultado = sumar(1.2,3.4)
  assert.equal(resultado, 4.6,`La suma debería retornar 4.6 pero fue ${resultado}`);
})

it("Si hacemos sumar(3, -5) debería retornar -2", function() {
  let resultado = sumar(3,-5)
  assert.equal(resultado, -2,`La suma debería retornar -2 pero fue ${resultado}`);
})