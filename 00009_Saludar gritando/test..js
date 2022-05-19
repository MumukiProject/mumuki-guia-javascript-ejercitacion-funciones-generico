it("Si hacemos saludarGritando('Alan', 'Turing') debería retornar ¡Hola Alan Turing, un gusto conocerte!", function() {
let resultado = saludarGritando('Alan', 'Turing')
assert.equal(resultado, '¡Hola Alan Turing, un gusto conocerte!',`saludarGritando('Alan', 'Turing') debería retornar '¡Hola Alan Turing, un gusto conocerte!' pero el resultado fue ${resultado}`);
})

it("Si hacemos saludarGritando('Feli', 'Perez') debería retornar ¡Hola Feli Perez, un gusto conocerte!", function() {
let resultado = saludarGritando('Feli', 'Perez')
assert.equal(resultado, '¡Hola Feli Perez, un gusto conocerte!',`saludarGritando('Feli', 'Perez') debería retornar '¡Hola Feli Perez, un gusto conocerte!' pero el resultado fue ${resultado}`);
})