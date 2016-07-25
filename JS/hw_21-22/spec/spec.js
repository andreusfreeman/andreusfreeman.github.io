var questions = require('../src/js/script.js');

describe('test', function () {
  it('check array', function () {
    var result;
    result = questions.firstQuestion;
    expect(result).toBe('Choice backend language');
  });
  it('check object', function () {
    var result;
    result = typeof(questions.firstVariant);
    expect(result).toEqual('object');
  });
  it('check array length', function () {
    var result;
    result = questions.firstVariant.length;
    expect(result).toEqual(3);
  });
});
