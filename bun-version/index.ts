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
    const bottleNumber = bottleNumberFactory(number)
    const nextBottleNumber = bottleNumberFactory(bottleNumber.successor())

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
    return this.number - 1
  }
}

class BottleNumber0 extends BottleNumber {
  constructor() {
    super(0)
  }

  quantity() {
    return 'no more'
  }

  action(): string {
    return 'Go to the store and buy some more'
  }

  successor(): number {
    return 99
  }
}

class BottleNumber1 extends BottleNumber {
  constructor() {
    super(1)
  }

  container(): string {
    return 'bottle'
  }

  pronoun(): 'it' | 'one' {
    return 'it'
  }

  successor(): number {
    return 0
  }
}

class BottleNumber6 extends BottleNumber {
  constructor() {
    super(6)
  }

  quantity() {
    return '1'
  }

  container(): string {
    return 'six-pack'
  }
}

function bottleNumberFactory(number: number): BottleNumber {
  switch (number) {
    case 0:
      return new BottleNumber0()
    case 1:
      return new BottleNumber1()
    case 6:
      return new BottleNumber6()
    default:
      return new BottleNumber(number)
  }
}
