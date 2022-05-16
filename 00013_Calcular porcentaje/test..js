it("Si hacemos calcularPorcentaje(100, 15) debería retornar 15", function() {
  let resultado = calcularPorcentaje(100, 15)
  assert.equal(resultado, 15,`calcularPorcentaje(100, 15) debería retornar 15 pero fue ${resultado}`);
})

it("Si hacemos calcularPorcentaje(200, 10) debería retornar 20", function() {
  let resultado = calcularPorcentaje(200, 10)
  assert.equal(resultado, 20,`calcularPorcentaje(200, 10) debería retornar 20 pero fue ${resultado}`);
})