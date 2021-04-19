import { add, minus, multi } from './math.js';

test('测试加法', () => {
  expect(add(2, 4)).toBe(6);
});

test('测试减法', () => {
  expect(minus(2, 4)).toBe(-2);
});

test('测试乘法', () => {
  expect(multi(2, 4)).toBe(8);
});


// 单元测试、集成测试
// 模块测试、多个模块测试

// 1.npm run jest
// 2.jest 執行（babel-jest）
// 3. babel-core
// 4.在運行測試之前，集合babel, 先把你的代碼做一次轉化
// 5. 運行轉化過的測試用例代碼


