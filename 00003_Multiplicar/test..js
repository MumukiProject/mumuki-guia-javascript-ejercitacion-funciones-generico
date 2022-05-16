it("Si hacemos multiplicar(2, 3) debería retornar 6", function() {
let resultado = multiplicar(2,3)
assert.equal(resultado, 6,`La multiplicación debería retornar 6 pero fue ${resultado}`);
})

it("Si hacemos multiplicar(4, 0.5) debería retornar 2", function() {
let resultado = multiplicar(4, 0.5)
assert.equal(resultado, 2,`La multiplicación debería retornar 2 pero fue ${resultado}`);
})
