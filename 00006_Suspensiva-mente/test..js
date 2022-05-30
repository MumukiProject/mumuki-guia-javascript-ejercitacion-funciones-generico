it("Si hacemos darSuspenso('tal vez') debería retornar tal vez...", function() {
  let resultado = darSuspenso('tal vez')
  assert.equal(resultado, 'tal vez...',`darSuspenso('tal vez') debería retornar tal vez... pero el resultado fue ${resultado}`);
})

it("Si hacemos darSuspenso('en fin') debería retornar en fin...", function() {
  let resultado = darSuspenso('en fin')
  assert.equal(resultado, 'en fin...',`darSuspenso('en fin') debería retornar en fin... pero el resultado fue ${resultado}`);
})



