import Counter from './Counter';
describe('测试counter的方法', () => {
  let counter = null;

  beforeAll(() => {
    console.log('beforeAll');
  });

  beforeEach(() => {
    console.log('beforeEach');
    counter = new Counter();
  });

  afterAll(() => {
    console.log('afterAll');
  });

  afterEach(() => {
    console.log('afterEach');
  });

  // 分组
  describe('测试增加相关的', () => {
    test('测试Counter 中的 addOne方法', () => {
      counter.addOne();
      expect(counter.number).toBe(1);
    });
    test('测试Counter 中的 addTwo方法', () => {
      counter.addTwo();
      expect(counter.number).toBe(2);
    });
  });

  describe('测试减少相关的', () => {
    test('测试Counter 中的 minusOne方法', () => {
      counter.minusOne();
      expect(counter.number).toBe(-1);
    });

    test('测试Counter 中的 minusTwo方法', () => {
      counter.minusTwo();
      expect(counter.number).toBe(-2);
    });
  });
});
