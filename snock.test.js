import { gennerateConfig, gennerateAnotherConfig } from "./snock";

// test('测试 gennerateConfig 函数', () => {
// expect(gennerateConfig()).toMatchSnapshot({
//   time: expect.any(Date)
// });
// })

// test('测试 gennerateAnotherConfig 函数', () => {
//   expect(gennerateAnotherConfig()).toMatchSnapshot();
// })

test("测试 gennerateConfig 函数", () => {
  expect(gennerateConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "domain": "localhost",
      "nihap": "223222",
      "port": 8080,
      "serve": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});

test("测试 gennerateAnotherConfig 函数", () => {
  expect(gennerateAnotherConfig()).toMatchInlineSnapshot(`
    Object {
      "domain": "localhost",
      "nihap": "22wwew3",
      "port": 8080,
      "serve": "http://localhost",
      "token": "32kr",
    }
  `);
});
