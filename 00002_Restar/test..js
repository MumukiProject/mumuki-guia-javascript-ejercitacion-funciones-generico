it("Si hacemos restar(3, 2) debería retornar 1", function() {
  let resultado = restar(3,2)
  assert.equal(resultado, 1,`La resta debería retornar 1 pero fue ${resultado}`);
})

it("Si hacemos restar(10, 5.5) debería retornar 4.5", function() {
  let resultado = restar(10,5.5)
  assert.equal(resultado, 4.5,`La resta debería retornar 4.5 pero fue ${resultado}`);
})

it("Si hacemos restar(3, 5) debería retornar -2", function() {
  let resultado = restar(3,5)
  assert.equal(resultado, -2,`La resta debería retornar -2 pero fue ${resultado}`);
})