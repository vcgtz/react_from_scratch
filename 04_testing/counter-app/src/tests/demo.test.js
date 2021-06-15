// npm run tests -> Corre los tests

describe('First group of tests', () => {
  test('two strings are equal', () => {
    // Inicialización
    const message = 'Hello World';

    // Estimulo
    const otherMessage = `Hello World`;

    // Comprobación
    expect(message).toBe(otherMessage);
  });
});