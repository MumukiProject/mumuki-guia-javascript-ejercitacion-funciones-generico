it("Si hacemos calcularPuntaje(3, 0, 0) debería retornar 9", function() {
  let resultado = calcularPuntaje(3, 0, 0)
  assert.equal(resultado, 9,`calcularPuntaje(3, 0, 0) debería retornar 9 pero fue ${resultado}`);
})

it("Si hacemos calcularPuntaje(0, 2, 1) debería retornar 20", function() {
  let resultado = calcularPuntaje(0, 2, 1)
  assert.equal(resultado, 20,`calcularPuntaje(0, 2, 1) debería retornar 20 pero fue ${resultado}`);
})

it("Si hacemos calcularPuntaje(5, 1, 2) debería retornar 40", function() {
  let resultado = calcularPuntaje(5, 1, 2)
  assert.equal(resultado, 40,`calcularPuntaje(5, 1, 2) debería retornar 40 pero fue ${resultado}`);
})