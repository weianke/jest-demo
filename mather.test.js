import { add, minus, multi } from './math.js';

// test('toBe 匹配器', () => {
//   // toBe匹配器
//   expect(10).toBe(10);
// });

// test('toEqual 匹配器', () => {
//   // toequal 判断对象相等
//   const a = {
//     one: 1,
//   };
//   expect(a).toEqual({
//     one: 1,
//   });
// });

// test('toBeUndefined 匹配器', () => {
//   // toequal 判断内容相等
//   const a = undefined;
//   expect(a).toBeUndefined();
// });

// test('toBeDefined 匹配器', () => {
//   // toequal 判断内容相等
//   const a = 1;
//   expect(a).toBeDefined();
// });


// test('toBeTruthy 匹配器', () => {
//   // toequal 判断内容相等
//   const a = 1;
//   expect(a).toBeTruthy();
// });

test('toBeFalsy 匹配器', () => {
  // toequal 判断内容相等
  const a = 1;
  expect(a).not.toBeFalsy();
});

// // 数字相关的匹配器打分
// test('测试0.1+0.2', () => {
//   const a = 0.1;
//   const b = 0.2;
//   expect(a + b).toBeCloseTo(0.3)
// })

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/top/);
});

// const shoppingList = [
//   'diapers',
//   'kleenex',
//   'trash bags',
//   'paper towels',
//   'milk',
// ];

// test('the shopping list has milk on it', () => {
//   expect(shoppingList).toContain('trash bags');
//   expect(new Set(shoppingList)).toContain('milk');
// });

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});