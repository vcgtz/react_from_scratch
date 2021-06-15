// npm run tests -> Corre los tests

test('first tests', () => {
    const isTrue = false;

    if (!isTrue) {
        throw new Error('Is false');
    }
});
