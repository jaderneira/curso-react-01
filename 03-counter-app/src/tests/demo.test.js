
describe('Pruebas en demo', () => {

    test('deben ser iguales los string', () => {
        
        // 1. inicializacion
        const mensaje1 = 'hola mundop'
        // 2. estimulo
        const mensaje2 = `hola mundop`
        // 3. observar el comportamiento
        expect(mensaje1).toBe(mensaje2);
    })

})


