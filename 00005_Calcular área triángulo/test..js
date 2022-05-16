it("Si hacemos calcularAreaTriangulo(3, 4) debería retornar 6", function() {
  let resultado = calcularAreaTriangulo(3, 4)
  assert.equal(resultado, 6,`El cálculo del área del triángulo debería retornar 6 pero fue ${resultado}`);
})

it("Si hacemos calcularAreaTriangulo(5, 6) debería retornar 15", function() {
  let resultado = calcularAreaTriangulo(5, 6)
  assert.equal(resultado, 15,`El cálculo del área del triángulo debería retornar 15 pero fue ${resultado}`);
})

