it("Si hacemos generarEmail('valentinaTereshkova', 'gmail') debería retornar 'valentinaTereshkova@gmail.com'", function() {
  let resultado = generarEmail('valentinaTereshkova', 'gmail')
  assert.equal(resultado, 'valentinaTereshkova@gmail.com',`generarEmail('valentinaTereshkova', 'gmail') debería retornar valentinaTereshkova@gmail.com pero fue ${resultado}`);
})

it("Si hacemos generarEmail('steveWozniak', 'gmail') debería retornar 'steveWozniak@gmail.com'", function() {
  let resultado = generarEmail('steveWozniak', 'gmail')
  assert.equal(resultado, 'steveWozniak@gmail.com',`generarEmail('steveWozniak', 'gmail') debería retornar steveWozniak@gmail.com pero fue ${resultado}`);
})