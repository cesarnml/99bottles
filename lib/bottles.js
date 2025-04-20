import { downTo } from './helpers';

function formatBottles(num) {
  if (num === 1) {
    return '1 bottle';
  }
  return `${num} bottles`;
}

function formatFirstLine(num) {
  if (num === 0) {
    return 'No more bottles of beer on the wall, ';
  }
  return `${formatBottles(num)} of beer on the wall, `;
}

function formatSecondLine(num) {
  if (num === 0) {
    return 'no more bottles of beer.\n';
  }
  return `${formatBottles(num)} of beer.\n`;
}

function formatThirdLine(num) {
  switch (num) {
    case 1:
      return 'Take it down and pass it around, ';
    case 0:
      return 'Go to the store and buy some more, ';
    default:
      return 'Take one down and pass it around, ';
  }
}

function formatFourthLine(num) {
  switch (num) {
    case 1:
      return 'no more bottles of beer on the wall.\n';
    case 0:
      return '99 bottles of beer on the wall.\n';
    default:
      return `${formatBottles(num - 1)} of beer on the wall.\n`;
  }
}

export class Bottles {
  constructor() {}

  verse(num) {
    const expected =
      formatFirstLine(num) +
      formatSecondLine(num) +
      formatThirdLine(num) +
      formatFourthLine(num);
    return expected;
  }

  verses(max, min) {
    const range = downTo(max, min);
    const array = range.map(num => this.verse(num));
    const expected = array.join('\n');
    return expected;
  }

  song() {
    return this.verses(99, 0);
  }
}
