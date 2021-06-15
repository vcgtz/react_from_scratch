import example from '../../base/example';

describe('Example group of tests', () => {
  test('array contains number', () => {
    expect(example()).toContain(1);
  });
});