it("Si hacemos obtenerCompetencia('JavaScript', 'Python') debería retornar `JavaScript vs. Python`", function() {
  let resultado = obtenerCompetencia('JavaScript', 'Python')
  assert.equal(resultado, `JavaScript vs. Python`,`obtenerCompetencia('JavaScript', 'Python') debería retornar JavaScript vs. Python pero fue ${resultado}`);
})

it("Si hacemos obtenerCompetencia('Coca', 'Pepsi') debería retornar `Coca vs. Pepsi`", function() {
  let resultado = obtenerCompetencia('Coca', 'Pepsi')
  assert.equal(resultado, 'Coca vs. Pepsi',`obtenerCompetencia('Coca', 'Pepsi') debería retornar Coca vs. Pepsi pero fue ${resultado}`);
})

it("Si hacemos obtenerCompetencia('Perros', 'Gatos') debería retornar `Perros vs. Gatos`", function() {
  let resultado = obtenerCompetencia('Perros', 'Gatos')
  assert.equal(resultado, 'Perros vs. Gatos',`obtenerCompetencia('Perros', 'Gatos') debería retornar Perros vs. Gatos pero fue ${resultado}`);
})