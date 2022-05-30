it("Si hacemos despedir('Gaby') debería retornar 'Hasta luego Gaby'", function() {
  let resultado = despedir('Gaby')
  assert.equal(resultado, 'Hasta luego Gaby',`despedir('Gaby') debería retornar 'Hasta luego Gaby' pero el resultado fue ${resultado}`);
})

it("Si hacemos despedir('Romi') debería retornar 'Hasta luego Romi'", function() {
  let resultado = despedir('Romi')
  assert.equal(resultado, 'Hasta luego Romi',`despedir('Romi') debería retornar 'Hasta luego Romi' pero el resultado fue ${resultado}`);
})