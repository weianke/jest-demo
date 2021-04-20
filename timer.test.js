
import timer from './timer';

jest.useFakeTimers();
test('timer 测试', () => {
  const fn = jest.fn();
  timer(fn);
  // jest.runOnlyPendingTimers();
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(1);
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(2);
})