const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1)

const highToLow = (upper: number, lower: number) => {
  return Array(upper - lower + 1)
    .fill(null)
    .map((_, i) => upper - i)
}

type BottleNumberType = {
  number: number
  successor: () => number
  action: () => string
  pronoun: () => string
  quantity: () => string
  container: () => string
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
    const bottleNumber = new BottleNumber(number)
    const nextBottleNumber = new BottleNumber(bottleNumber.successor())

    return (
      `${capitalize(bottleNumber.quantity())} ${bottleNumber.container()} of beer on the wall, ${bottleNumber.quantity()} ${bottleNumber.container()} of beer.\n` +
      `${bottleNumber.action()}, ${nextBottleNumber.quantity()} ${nextBottleNumber.container()} of beer on the wall.\n`
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
