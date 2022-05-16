it("Si hacemos dividir(2, 3) debería retornar 0.6666666666666666", function() {
  let resultado = dividir(2,3)
  assert.equal(resultado, 0.6666666666666666,`La división debería retornar 0.6666666666666666 pero fue ${resultado}`);
})

it("Si hacemos dividir(1.2, 3.4) debería retornar 0.35294117647058826", function() {
  let resultado = dividir(1.2, 3.4)
  assert.equal(resultado, 0.35294117647058826,`La multiplicación debería retornar 0.35294117647058826 pero fue ${resultado}`);
})

it("Si hacemos dividir(3, -5) debería retornar -0.6", function() {
  let resultado = dividir(3, -5)
  assert.equal(resultado, -0.6,`La multiplicación debería retornar -0.6 pero fue ${resultado}`);
})
