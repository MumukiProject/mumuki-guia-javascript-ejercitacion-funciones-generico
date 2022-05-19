it("Si hacemos obtenerNombreCompleto('Nikola', 'Tesla') debería retornar 'Nikola Tesla'", function() {
  let resultado = obtenerNombreCompleto('Nikola', 'Tesla')
  assert.equal(resultado, 'Nikola Tesla',`obtenerNombreCompleto('Nikola', 'Tesla') debería retornar 'Nikola Tesla' pero el resultado fue ${resultado}`);
})

it("Si hacemos obtenerNombreCompleto('Marie', 'Curie') debería retornar 'Marie Curie'", function() {
  let resultado = obtenerNombreCompleto('Marie', 'Curie')
  assert.equal(resultado, 'Marie Curie',`obtenerNombreCompleto('Marie', 'Curie') debería retornar 'Marie Curie' pero el resultado fue ${resultado}`);
})