import { downTo, capitalize } from './helpers';

export class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verses(upper, lower) {
    return downTo(upper, lower)
      .map(i => this.verse(i))
      .join('\n');
  }

  verse(number) {
    const bottleNumber = new BottleNumber(number);
    const nextBottleNumber = new BottleNumber(bottleNumber.successor());

    return (
      `${capitalize(bottleNumber.quantity())} ${bottleNumber.container()} of beer on the wall, ` +
      `${bottleNumber.quantity()} ${bottleNumber.container()} of beer.\n` +
      bottleNumber.action(number) +
      `${nextBottleNumber.quantity()} ${nextBottleNumber.container()} of beer on the wall.\n`
    );
  }
}

class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  quantity() {
    switch (this.number) {
      case 0:
        return 'no more';
      case 6:
        return '1';
      default:
        return this.number.toString();
    }
  }

  container() {
    switch (this.number) {
      case 1:
        return 'bottle';
      case 6:
        return 'six-pack';
      default:
        return 'bottles';
    }
  }

  action() {
    switch (this.number) {
      case 0:
        return 'Go to the store and buy some more, ';
      default:
        return `Take ${this.pronoun()} down and pass it around, `;
    }
  }

  pronoun() {
    switch (this.number) {
      case 1:
        return 'it';
      default:
        return 'one';
    }
  }

  successor() {
    switch (this.number) {
      case 0:
        return 99;
      default:
        return this.number - 1;
    }
  }
}
