it("Si hacemos suspender('tal vez') debería retornar tal vez...", function() {
  let resultado = suspender('tal vez')
  assert.equal(resultado, 'tal vez...',`suspender('tal vez') debería retornar tal vez... pero el resultado fue ${resultado}`);
})

it("Si hacemos suspender('en fin') debería retornar en fin...", function() {
  let resultado = suspender('en fin')
  assert.equal(resultado, 'en fin...',`suspender('en fin') debería retornar en fin... pero el resultado fue ${resultado}`);
})



