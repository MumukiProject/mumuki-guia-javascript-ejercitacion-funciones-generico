it("Si hacemos obtenerDatosDeCiudad('Santa Fe', 545606, 'Argentina') debería retornar La ciudad de Santa Fe tiene una población de 545606 habitantes y está ubicada en Argentina", function() {
let resultado = obtenerDatosDeCiudad('Santa Fe', 545606, 'Argentina')
assert.equal(resultado, 'La ciudad de Santa Fe tiene una población de 545606 habitantes y está ubicada en Argentina',`obtenerDatosDeCiudad('Santa Fe', 545606, 'Argentina') debería retornar La ciudad de Santa Fe tiene una población de 545606 habitantes y está ubicada en Argentina pero el resultado fue ${resultado}`);
})