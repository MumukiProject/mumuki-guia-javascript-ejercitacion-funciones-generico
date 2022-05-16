it("Si hacemos gritar('hola') debería retornar ¡hola!", function() {
  let resultado = gritar('hola')
  assert.equal(resultado, '¡hola!',`gritar('hola') debería retornar ¡hola! pero el resultado fue ${resultado}`);
})

it("Si hacemos gritar('aaaaaa') debería retornar ¡aaaaaa!", function() {
  let resultado = gritar('aaaaaa')
  assert.equal(resultado, '¡aaaaaa!',`gritar('aaaaaa') debería retornar ¡aaaaaa! pero el resultado fue ${resultado}`);
})



