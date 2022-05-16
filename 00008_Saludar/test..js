it("Si hacemos saludar('Ada') debería retornar 'Hola Ada, un gusto conocerte'", function() {
  let resultado = saludar('Ada')
  assert.equal(resultado, 'Hola Ada, un gusto conocerte',`saludar('Ada') debería retornar 'Hola Ada, un gusto conocerte' pero el resultado fue ${resultado}`);
})

it("Si hacemos saludar('Alfonsina') debería retornar 'Hola Alfonsina, un gusto conocerte'", function() {
  let resultado = saludar('Alfonsina')
  assert.equal(resultado, 'Hola Alfonsina, un gusto conocerte',`saludar('Alfonsina') debería retornar 'Hola Alfonsina, un gusto conocerte' pero el resultado fue ${resultado}`);
})