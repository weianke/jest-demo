import addDivToBody from './dom';
import $ from 'jquery';

test('测试 addDivToBody',() => {
  addDivToBody();
  addDivToBody();
  expect($('body').find('div').length).toBe(2);
})


// node 不具备dom
// jest 在node环境下自己模拟了一套dom的api ,jsdom