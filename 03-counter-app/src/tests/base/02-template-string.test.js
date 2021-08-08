import { getSaludo } from "../../base/02-template-string"



describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe devolver Hola Jesus!', () => {

        const nombre = 'Jesus'

        const saludo = getSaludo( nombre );

        expect(saludo).toBe('Hola ' + nombre + '!');
        
    })
    
    
})
