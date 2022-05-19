it("Si hacemos saludar('Grace') debería retornar 'Hola Grace, un gusto conocerte'", function() {
  let resultado = saludar('Grace')
  assert.equal(resultado, 'Hola Grace, un gusto conocerte',`saludar('Grace') debería retornar 'Hola Grace, un gusto conocerte' pero el resultado fue ${resultado}`);
})

it("Si hacemos saludar('Romi') debería retornar 'Hola Romi, un gusto conocerte'", function() {
  let resultado = saludar('Romi')
  assert.equal(resultado, 'Hola Romi, un gusto conocerte',`saludar('Romi') debería retornar 'Hola Romi, un gusto conocerte' pero el resultado fue ${resultado}`);
})