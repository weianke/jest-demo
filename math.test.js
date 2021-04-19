import { add, minus, multi } from './math.js';

// test('测试10與10相匹配', () => {
//   // toBe匹配器
//   expect(10).toBe(10);
// });

// test('測試對象内容相等', () => {
//   // toequal 判断内容相等
//   const a = {
//     one: 1,
//   };
//   expect(a).toEqual({
//     one: 1,
//   });
// });

test('測試對象是否为空', () => {
  // toequal 判断内容相等
  const a = null;
  expect(a).toBeNull();
});

