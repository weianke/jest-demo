
import timer from './timer';

test('timer 测试', (done) => {
  timer(()=> {
    expect(1).toBe(1);
    done();
  })
})