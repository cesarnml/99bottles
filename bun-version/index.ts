export class Bottles {
  //   song() {}
  //   verses(high: number, low: number) {}
  verse(num: number) {
    switch (num) {
      case 2:
        return (
          '2 bottles of beer on the wall, 2 bottles of beer.\n' +
          'Take one down and pass it around, 1 bottle of beer on the wall.\n'
        )
      default:
        return (
          `${num} bottles of beer on the wall, ${num} bottles of beer.\n` +
          `Take one down and pass it around, ${num - 1} bottles of beer on the wall.\n`
        )
    }
  }
}
