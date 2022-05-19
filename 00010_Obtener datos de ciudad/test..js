it("Si hacemos obtenerDatosDeCiudad('Lima', 9674755, 'Perú') debería retornar La ciudad de Lima tiene una población de 9674755 habitantes y está ubicada en Perú", function() {
let resultado = obtenerDatosDeCiudad('Lima', 9674755, 'Perú')
assert.equal(resultado, 'La ciudad de Lima tiene una población de 545606 habitantes y está ubicada en Perú',`obtenerDatosDeCiudad('Lima', 545606, 'Perú') debería retornar La ciudad de Lima tiene una población de 545606 habitantes y está ubicada en Perú pero el resultado fue ${resultado}`);
})