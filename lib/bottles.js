import { downTo, capitalize } from './helpers';

export class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verses(max, min) {
    return downTo(max, min)
      .map(num => this.verse(num))
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

  successor(number) {
    switch (number) {
      case 0:
        return 99;
      default:
        return number - 1;
    }
  }

  container(number) {
    switch (number) {
      case 6:
        return 'six-pack';
      case 1:
        return 'bottle';
      default:
        return 'bottles';
    }
  }

  quantity(number) {
    switch (number) {
      case 6:
        return '1';
      case 0:
        return 'no more';
      default:
        return number.toString();
    }
  }

  action(number) {
    switch (number) {
      case 0:
        return 'Go to the store and buy some more, ';
      default:
        return `Take ${this.pronoun(number)} down and pass it around, `;
    }
  }

  pronoun(number) {
    switch (number) {
      case 1:
        return 'it';
      default:
        return 'one';
    }
  }
}
