const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1)

const highToLow = (upper: number, lower: number) => {
  return Array(upper - lower + 1)
    .fill(null)
    .map((_, i) => upper - i)
}

export class Bottles {
  song() {
    return this.verses(99, 0)
  }

  verses(upper: number, lower: number) {
    return highToLow(upper, lower)
      .map(i => this.verse(i))
      .join('\n')
  }

  verse(number: number) {
    return (
      `${capitalize(new BottleNumber(number).quantity())} ${new BottleNumber(number).container()} of beer on the wall, ${new BottleNumber(number).quantity()} ${new BottleNumber(number).container()} of beer.\n` +
      `${new BottleNumber(number).action()}, ${new BottleNumber(new BottleNumber(number).successor()).quantity()} ${new BottleNumber(new BottleNumber(number).successor()).container()} of beer on the wall.\n`
    )
  }
}

class BottleNumber {
  number: number

  constructor(number: number) {
    this.number = number
  }

  successor() {
    switch (this.number) {
      case 0:
        return 99
      default:
        return this.number - 1
    }
  }

  action() {
    switch (this.number) {
      case 0:
        return 'Go to the store and buy some more'
      default:
        return `Take ${this.pronoun()} down and pass it around`
    }
  }

  pronoun() {
    switch (this.number) {
      case 1:
        return 'it'
      default:
        return 'one'
    }
  }

  quantity() {
    switch (this.number) {
      case 0:
        return 'no more'
      case 6:
        return '1'
      default:
        return this.number.toString()
    }
  }

  container() {
    switch (this.number) {
      case 1:
        return 'bottle'
      case 6:
        return 'six-pack'
      default:
        return 'bottles'
    }
  }
}
