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
    return (
      `${capitalize(this.quantity(number))} ${this.container(number)} of beer on the wall, ` +
      `${this.quantity(number)} ${this.container(number)} of beer.\n` +
      this.action(number) +
      `${this.quantity(this.successor(number))} ${this.container(this.successor(number))} of beer on the wall.\n`
    );
  }

  quantity(number) {
    return new BottleNumber(number).quantity();
  }

  container(number) {
    return new BottleNumber(number).container();
  }

  action(number) {
    return new BottleNumber(number).action();
  }

  successor(number) {
    return new BottleNumber(number).successor();
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
