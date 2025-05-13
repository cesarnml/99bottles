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

  verse(num) {
    return (
      `${capitalize(this.quantity(num))} ${this.container(num)} of beer on the wall, ` +
      `${this.quantity(num)} ${this.container(num)} of beer.\n` +
      this.action(num) +
      `${this.quantity(num - 1)} ${this.container(num - 1)} of beer on the wall.\n`
    );
  }

  container(num) {
    switch (num) {
      case 6:
        return 'six-pack';
      case 1:
        return 'bottle';
      default:
        return 'bottles';
    }
  }

  quantity(num) {
    switch (num) {
      case 6:
        return '1';
      case 0:
        return 'no more';
      case -1:
        return '99';
      default:
        return num.toString();
    }
  }

  action(num) {
    switch (num) {
      case 1:
        return 'Take it down and pass it around, ';
      case 0:
        return 'Go to the store and buy some more, ';
      default:
        return 'Take one down and pass it around, ';
    }
  }
}
