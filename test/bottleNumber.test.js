import {
  BottleNumber,
  BottleNumber0,
  BottleNumber1,
  BottleNumber6,
} from '../lib/bottles';

describe('BottleNumber', () => {
  test('returns correct class for a given number', () => {
    // 0,1,6 are special
    expect(BottleNumber.for(0).constructor).toBe(BottleNumber0);
    expect(BottleNumber.for(1).constructor).toBe(BottleNumber1);
    expect(BottleNumber.for(6).constructor).toBe(BottleNumber6);

    // Other number get the default
    expect(BottleNumber.for(3).constructor).toBe(BottleNumber);
    expect(BottleNumber.for(7).constructor).toBe(BottleNumber);
    expect(BottleNumber.for(42).constructor).toBe(BottleNumber);
  });
});
