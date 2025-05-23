import { BottleVerse } from '../lib/bottles';
import { testPlaysVerseRole } from '../bun-version/helpers';

describe('BottleVerse', () => {
  test('verse general rule upper bound', () => {
    const expected =
      '99 bottles of beer on the wall, ' +
      '99 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '98 bottles of beer on the wall.\n';
    expect(BottleVerse.lyrics(99)).toBe(expected);
  });

  test('verse general rule lower bound', () => {
    const expected =
      '3 bottles of beer on the wall, ' +
      '3 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '2 bottles of beer on the wall.\n';
    expect(BottleVerse.lyrics(3)).toBe(expected);
  });

  test('verse 7', () => {
    const expected =
      '7 bottles of beer on the wall, ' +
      '7 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '1 six-pack of beer on the wall.\n';
    expect(BottleVerse.lyrics(7)).toBe(expected);
  });

  test('verse 6', () => {
    const expected =
      '1 six-pack of beer on the wall, ' +
      '1 six-pack of beer.\n' +
      'Take one down and pass it around, ' +
      '5 bottles of beer on the wall.\n';
    expect(BottleVerse.lyrics(6)).toBe(expected);
  });

  test('verse 2', () => {
    const expected =
      '2 bottles of beer on the wall, ' +
      '2 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '1 bottle of beer on the wall.\n';
    expect(BottleVerse.lyrics(2)).toBe(expected);
  });

  test('verse 1', () => {
    const expected =
      '1 bottle of beer on the wall, ' +
      '1 bottle of beer.\n' +
      'Take it down and pass it around, ' +
      'no more bottles of beer on the wall.\n';
    expect(BottleVerse.lyrics(1)).toBe(expected);
  });

  test('verse 0', () => {
    const expected =
      'No more bottles of beer on the wall, ' +
      'no more bottles of beer.\n' +
      'Go to the store and buy some more, ' +
      '99 bottles of beer on the wall.\n';
    expect(BottleVerse.lyrics(0)).toBe(expected);
  });

  testPlaysVerseRole(BottleVerse);
});
