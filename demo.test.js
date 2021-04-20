import { runCallback, createObject, getData } from './demo';
import axios from 'axios';

jest.mock('axios');
// 1.生成mock函数，捕获mock函数的调用
// 2.它可以让我们自由的设置返回函数
// 3.mock第三个作用是改变函数的内部实现

test('测试 runcallback', () => {
  const func = jest.fn(); // 生成mock函数，捕获mock函数的调用
  func.mockReturnValueOnce('dell');
  runCallback(func);
  runCallback(func);
  // expect(func.mock.calls.length).toBe(2);
  expect(func.mock.calls[0]).toEqual(['abd']);
  expect(func.mock.results[0].value).toBe('dell');
  // console.log(func.mock);
});

test('测试 createObject', () => {
  const func = jest.fn();
  createObject(func);
  console.log(func.mock);
});

test('测试 getdata', async () => {
  // mock第三个作用是改变函数的内部实现
  axios.get.mockResolvedValue({ data: 'hello' });
  await getData().then((data) => {
    expect(data).toBe('hello');
  });
});
