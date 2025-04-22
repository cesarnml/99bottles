import { downTo } from './helpers';

export class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verses(max, min) {
    const bottleRange = downTo(max, min);
    const verses = bottleRange.map(num => this.verse(num));
    return verses.join('\n');
  }

  verse(num) {
    return (
      formatFirstLine(num) +
      formatSecondLine(num) +
      formatThirdLine(num) +
      formatFourthLine(num)
    );
  }
}

function formatBottleCount(num) {
  switch (num) {
    case 1:
      return `${num} bottle`;
    default:
      return `${num} bottles`;
  }
}

function formatFirstLine(num) {
  switch (num) {
    case 0:
      return 'No more bottles of beer on the wall, ';
    default:
      return `${formatBottleCount(num)} of beer on the wall, `;
  }
}

function formatSecondLine(num) {
  switch (num) {
    case 0:
      return 'no more bottles of beer.\n';
    default:
      return `${formatBottleCount(num)} of beer.\n`;
  }
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
      return `${formatBottleCount(num - 1)} of beer on the wall.\n`;
  }
}
