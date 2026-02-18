const { js, batch } = require('./index');

describe('ultra-accordion-js', () => {
  test('should process string input', () => {
    expect(js('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => js(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = js('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});
