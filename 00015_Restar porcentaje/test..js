it("Si hacemos restarPorcentaje(100, 15) debería retornar 85", function() {
  let resultado = restarPorcentaje(100, 15)
  assert.equal(resultado, 85,`restarPorcentaje(100, 15) debería retornar 85 pero fue ${resultado}`);
})

it("Si hacemos restarPorcentaje(10, 40) debería retornar 6", function() {
  let resultado = restarPorcentaje(10, 40)
  assert.equal(resultado, 6,`restarPorcentaje(10, 40) debería retornar 6 pero fue ${resultado}`);
})

it("Si hacemos restarPorcentaje(200, 10) debería retornar 180", function() {
  let resultado = restarPorcentaje(200, 10)
  assert.equal(resultado, 180,`restarPorcentaje(200, 10) debería retornar 180 pero fue ${resultado}`);
})