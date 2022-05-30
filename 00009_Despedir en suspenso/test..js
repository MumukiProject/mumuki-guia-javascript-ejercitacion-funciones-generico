it("Si hacemos despedirEnSuspenso('Alan', 'Turing')  debería retornar Hasta luego Alan Turing...", function() {
let resultado = despedirEnSuspenso('Alan', 'Turing')
assert.equal(resultado, 'Hasta luego Alan Turing...',`despedirEnSuspenso('Alan', 'Turing') debería retornar 'Hasta luego Alan Turing...' pero el resultado fue ${resultado}`);
})

it("Si hacemos despedirEnSuspenso('Feli', 'Perez') debería retornar Hasta luego Feli Perez...", function() {
let resultado = despedirEnSuspenso('Feli', 'Perez')
assert.equal(resultado, 'Hasta luego Feli Perez...',`despedirEnSuspenso('Feli', 'Perez') debería retornar 'Hasta luego Feli Perez...' pero el resultado fue ${resultado}`);
})