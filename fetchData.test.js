import { fetchData } from './fetchData';

// 回调类型的异步函数测试
// test('fetchData 返回结果为 {success： true}', (done) => {
//   fetchData((data) => {
//     expect(data).toEqual({
//       success: true
//     })
//     done();
//   })
// });

//
// test('fetchData 返回结果为 {success： true}', () => {
//  return fetchData().then((res) => {
//     expect(res.data).toEqual({
//       success: true
//     })
//   })
// });

// 判断返回404
// test('fetchData 返回结果为 404', () => {
//   expect.assertions(1);
//   return fetchData().catch((e) => {
//      expect(e.toString().indexOf('404') > -1).toBe(true);
//    })
//  });

// 其他写法-success
// test('fetchData 返回结果为 {success： true}', () => {
//   return expect(fetchData()).resolves.toMatchObject({
//     data: {
//       success: true
//     }
//   })
//  });

// 其他写法-error
//  test('fetchData 返回结果为 404', () => {
//   return expect(fetchData()).rejects.toThrow();
//  });

//  test('fetchData 返回结果为 {success： true}', async () => {
//   await expect(fetchData()).resolves.toMatchObject({
//     data: {
//       success: true
//     }
//   })
//  });

// test('fetchData 返回结果为 404', async () => {
//   await expect(fetchData()).rejects.toThrow();
// });


//  test('fetchData 返回结果为 {success： true}', async () => {
//     const res = await fetchData();
//     expect(res.data).toEqual({
//       success: true
//     })
//  });

 test('fetchData 返回结果为 404', async () => {
  expect.assertions(1);
   try {
    await fetchData(); 
   } catch (e) {
    //  console.log(e)
     expect(e.toString()).toEqual("Error: Request failed with status code 404")
   }
});
