import { downTo, capitalize } from './helpers';

export class CountdownSong {
  constructor(verseTemplate, max = 99999, min = 0) {
    this.verseTemplate = verseTemplate;
    this.max = max;
    this.min = min;
  }

  song() {
    return this.verses(this.max, this.min);
  }

  verses(upper, lower) {
    return downTo(upper, lower)
      .map(i => this.verse(i))
      .join('\n');
  }

  verse(number) {
    return this.verseTemplate.lyrics(number);
  }
}

export class BottleVerse {
  static lyrics(number) {
    return new BottleVerse(BottleNumber.for(number)).lyrics();
  }

  constructor(bottleNumber) {
    this.bottleNumber = bottleNumber;
  }

  lyrics() {
    return (
      capitalize(`${this.bottleNumber} of beer on the wall, `) +
      `${this.bottleNumber} of beer.\n` +
      this.bottleNumber.action() +
      `${this.bottleNumber.successor()} of beer on the wall.\n`
    );
  }
}

export class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  static for(number) {
    const bottleNumberClass = BottleNumber.registry.find(candidate =>
      candidate.canHandle(number)
    );

    return new bottleNumberClass(number);
  }

  static register(candidate) {
    BottleNumber.registry.unshift(candidate);
  }

  static canHandle() {
    return true;
  }

  toString() {
    return `${this.quantity()} ${this.container()}`;
  }

  quantity() {
    return this.number.toString();
  }

  container() {
    return 'bottles';
  }

  action() {
    return `Take ${this.pronoun()} down and pass it around, `;
  }

  pronoun() {
    return 'one';
  }

  successor() {
    return BottleNumber.for(this.number - 1);
  }
}

BottleNumber.registry = [BottleNumber];

export class BottleNumber0 extends BottleNumber {
  static canHandle(number) {
    return number === 0;
  }

  quantity() {
    return 'no more';
  }

  action() {
    return 'Go to the store and buy some more, ';
  }

  successor() {
    return BottleNumber.for(99);
  }
}

BottleNumber.register(BottleNumber0);

export class BottleNumber1 extends BottleNumber {
  static canHandle(number) {
    return number === 1;
  }
  container() {
    return 'bottle';
  }

  pronoun() {
    return 'it';
  }
}

BottleNumber.register(BottleNumber1);

export class BottleNumber6 extends BottleNumber {
  static canHandle(number) {
    return number === 6;
  }

  quantity() {
    return '1';
  }

  container() {
    return 'six-pack';
  }
}

BottleNumber.register(BottleNumber6);
