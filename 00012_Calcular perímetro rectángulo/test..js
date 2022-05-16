it("Si hacemos calcularPerimetroRectangulo(3.2, 5) debería retornar 16.4", function() {
  let resultado = calcularPerimetroRectangulo(3.2, 5)
  assert.equal(resultado, 16.4,`calcularPerimetroRectangulo(3.2, 5) debería retornar 16.4 pero fue ${resultado}`);
})

it("Si hacemos calcularPerimetroRectangulo(10, 20) debería retornar 60", function() {
  let resultado = calcularPerimetroRectangulo(10, 20)
  assert.equal(resultado, 60,`calcularPerimetroRectangulo(10, 20) debería retornar 60 pero fue ${resultado}`);
})