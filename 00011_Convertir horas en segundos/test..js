it("Si hacemos convertirHorasEnSegundos(1) debería retornar 3600", function() {
  let resultado = convertirHorasEnSegundos(1)
  assert.equal(resultado, 3600,`convertirHorasEnSegundos(1) debería retornar 3600 pero fue ${resultado}`);
})

it("Si hacemos convertirHorasEnSegundos(3) debería retornar 10800", function() {
  let resultado = convertirHorasEnSegundos(3)
  assert.equal(resultado, 10800,`convertirHorasEnSegundos(3) debería retornar 10800 pero fue ${resultado}`);
})

it("Si hacemos convertirHorasEnSegundos(4.5) debería retornar 16200", function() {
  let resultado = convertirHorasEnSegundos(4.5)
  assert.equal(resultado, 16200,`convertirHorasEnSegundos(4.5) debería retornar 16200 pero fue ${resultado}`);
})