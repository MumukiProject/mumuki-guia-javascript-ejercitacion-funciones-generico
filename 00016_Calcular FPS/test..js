it("Si hacemos calcularFPS(1, 1) debería retornar 60", function() {
  let resultado = calcularFPS(1, 1)
  assert.equal(resultado, 60,`calcularFPS(1, 1) debería retornar 60 pero fue ${resultado}`);
})

it("Si hacemos calcularFPS(10, 2) debería retornar 60", function() {
  let resultado = calcularFPS(10, 2)
  assert.equal(resultado, 1200,`calcularFPS(10, 2) debería retornar 1200 pero fue ${resultado}`);
})

it("Si hacemos calcularFPS(2, 3) debería retornar 360", function() {
  let resultado = calcularFPS(2, 3)
  assert.equal(resultado, 360,`calcularFPS(2, 3) debería retornar 360 pero fue ${resultado}`);
})