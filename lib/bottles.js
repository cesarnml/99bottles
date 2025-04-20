import { downTo } from './helpers';

function formatBottles(num) {
  if (num === 0) {
    return 'no more bottles';
  }
  if (num === 1) {
    return '1 bottle';
  }
  return `${num} bottles`;
}

class BottleVerse {
  constructor(num) {
    this.num = num;
  }
  firstLine() {
    return `${this.bottlesOnWall()}, `;
  }
  secondLine() {
    return `${this.bottles()} of beer.\n`;
  }
  thirdLine() {
    return 'Take one down and pass it around, ';
  }
  fourthLine() {
    return `${this.nextBottlesOnWall()}`;
  }
  bottles() {
    return formatBottles(this.num);
  }
  bottlesOnWall() {
    return `${this.bottles()} of beer on the wall`;
  }
  nextBottlesOnWall() {
    return `${formatBottles(this.num - 1)} of beer on the wall.\n`;
  }
  verse() {
    return (
      this.firstLine() +
      this.secondLine() +
      this.thirdLine() +
      this.fourthLine()
    );
  }
}

class ZeroBottlesVerse extends BottleVerse {
  firstLine() {
    return 'No more bottles of beer on the wall, ';
  }
  secondLine() {
    return `${formatBottles(0)} of beer.\n`;
  }
  thirdLine() {
    return 'Go to the store and buy some more, ';
  }
  fourthLine() {
    return '99 bottles of beer on the wall.\n';
  }
}

class OneBottleVerse extends BottleVerse {
  firstLine() {
    return `${formatBottles(1)} of beer on the wall, `;
  }
  secondLine() {
    return `${formatBottles(1)} of beer.\n`;
  }
  thirdLine() {
    return 'Take it down and pass it around, ';
  }
  fourthLine() {
    return `${formatBottles(0)} of beer on the wall.\n`;
  }
}

function getVerseClass(num) {
  if (num === 0) return ZeroBottlesVerse;
  if (num === 1) return OneBottleVerse;
  return BottleVerse;
}

export class Bottles {
  verse(num) {
    const VerseClass = getVerseClass(num);
    return new VerseClass(num).verse();
  }

  verses(max, min) {
    const verseNumbers = downTo(max, min);
    const verses = verseNumbers.map(num => this.verse(num));
    const songLyrics = verses.join('\n');
    return songLyrics;
  }

  song() {
    return this.verses(99, 0);
  }
}
