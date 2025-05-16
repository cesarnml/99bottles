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
    const bottleNumber = BottleNumber.for(number)
    const nextBottleNumber = bottleNumber.successor()

    return (
      capitalize(
        `${bottleNumber} of beer on the wall, ${bottleNumber} of beer.\n`
      ) + `${bottleNumber.action()}, ${nextBottleNumber} of beer on the wall.\n`
    )
  }
}

class BottleNumber {
  number: number

  constructor(number: number) {
    this.number = number
  }

  static for(number: number) {
    let bottleNumberClass: typeof BottleNumber

    switch (number) {
      case 0:
        bottleNumberClass = BottleNumber0
        break
      case 1:
        bottleNumberClass = BottleNumber1
        break
      case 6:
        bottleNumberClass = BottleNumber6
        break
      default:
        bottleNumberClass = BottleNumber
    }

    return new bottleNumberClass(number)
  }

  toString() {
    return `${this.quantity()} ${this.container()}`
  }

  quantity() {
    return this.number.toString()
  }

  container(): string {
    return 'bottles'
  }

  action() {
    return `Take ${this.pronoun()} down and pass it around`
  }

  pronoun() {
    return 'one'
  }

  successor() {
    return BottleNumber.for(this.number - 1)
  }
}

class BottleNumber0 extends BottleNumber {
  quantity() {
    return 'no more'
  }

  action(): string {
    return 'Go to the store and buy some more'
  }

  successor() {
    return BottleNumber.for(99)
  }
}

class BottleNumber1 extends BottleNumber {
  container(): string {
    return 'bottle'
  }

  pronoun(): 'it' | 'one' {
    return 'it'
  }

  successor() {
    return BottleNumber.for(0)
  }
}

class BottleNumber6 extends BottleNumber {
  quantity() {
    return '1'
  }

  container(): string {
    return 'six-pack'
  }
}
