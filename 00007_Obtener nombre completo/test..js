it("Si hacemos obtenerNombreCompleto('Ada', 'Lovelace') debería retornar 'Ada Lovelace'", function() {
  let resultado = obtenerNombreCompleto('Ada', 'Lovelace')
  assert.equal(resultado, 'Ada Lovelace',`obtenerNombreCompleto('Ada', 'Lovelace') debería retornar 'Ada Lovelace' pero el resultado fue ${resultado}`);
})

it("Si hacemos obtenerNombreCompleto('Alfonsina', 'Storni') debería retornar 'Alfonsina Storni'", function() {
  let resultado = obtenerNombreCompleto('Alfonsina', 'Storni')
  assert.equal(resultado, 'Alfonsina Storni',`obtenerNombreCompleto('Alfonsina', 'Storni') debería retornar 'Alfonsina Storni' pero el resultado fue ${resultado}`);
})