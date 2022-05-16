it("Si hacemos saludarGritando('Ada', 'Lovelace') debería retornar ¡Hola Ada Lovelace, un gusto conocerte!", function() {
let resultado = saludarGritando('Ada', 'Lovelace')
assert.equal(resultado, '¡Hola Ada Lovelace, un gusto conocerte!',`saludarGritando('Ada', 'Lovelace') debería retornar '¡Hola Ada Lovelace, un gusto conocerte!' pero el resultado fue ${resultado}`);
})

it("Si hacemos saludarGritando('Alfonsina', 'Storni') debería retornar ¡Hola Alfonsina Storni, un gusto conocerte!", function() {
let resultado = saludarGritando('Alfonsina', 'Storni')
assert.equal(resultado, '¡Hola Alfonsina Storni, un gusto conocerte!',`saludarGritando('Alfonsina', 'Storni') debería retornar '¡Hola Alfonsina Storni, un gusto conocerte!' pero el resultado fue ${resultado}`);
})