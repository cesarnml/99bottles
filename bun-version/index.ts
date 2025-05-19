const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1)

const highToLow = (upper: number, lower: number) => {
  return Array(upper - lower + 1)
    .fill(null)
    .map((_, i) => upper - i)
}

interface VerseRole {
  lyrics(number: number): string
}

type VerseTemplate = {
  new (...args: any[]): unknown
  lyrics(number: number): string
}

export class CountdownSong {
  verseTemplate: VerseTemplate
  max: number
  min: number

  constructor(verseTemplate: VerseTemplate = BottleVerse, max = 99, min = 0) {
    this.verseTemplate = verseTemplate
    this.max = max
    this.min = min
  }

  song() {
    return this.verses(this.max, this.min)
  }

  verses(upper: number, lower: number) {
    return highToLow(upper, lower)
      .map(i => this.verse(i))
      .join('\n')
  }

  verse(number: number) {
    return this.verseTemplate.lyrics(number)
  }
}

export class BottleVerse implements VerseRole {
  bottleNumber: BottleNumber

  constructor(bottleNumber: BottleNumber) {
    this.bottleNumber = bottleNumber
  }

  static lyrics(number: number) {
    return new BottleVerse(BottleNumber.for(number)).lyrics()
  }

  lyrics() {
    return (
      capitalize(
        `${this.bottleNumber} of beer on the wall, ${this.bottleNumber} of beer.\n`
      ) +
      `${this.bottleNumber.action()}, ${this.bottleNumber.successor()} of beer on the wall.\n`
    )
  }
}

export class VerseFake implements VerseRole {
  static lyrics(number: number): string {
    return `This is verse ${number}.\n`
  }

  lyrics(number: number): string {
    return VerseFake.lyrics(number)
  }
}

export class BottleNumber {
  static registry: Array<typeof BottleNumber> = []

  number: number

  constructor(number: number) {
    this.number = number
  }

  static for(number: number) {
    const bottleNumberClass = BottleNumber.registry.find(candidate =>
      candidate.canHandle(number)
    ) as typeof BottleNumber

    return new bottleNumberClass(number)
  }

  static register(candidate: typeof BottleNumber) {
    BottleNumber.registry.unshift(candidate)
  }

  static canHandle(number: number) {
    return true
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

BottleNumber.registry = [BottleNumber]

export class BottleNumber0 extends BottleNumber {
  static canHandle(number: number) {
    return number === 0
  }

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

BottleNumber.register(BottleNumber0)

export class BottleNumber1 extends BottleNumber {
  static canHandle(number: number) {
    return number === 1
  }

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

BottleNumber.register(BottleNumber1)

export class BottleNumber6 extends BottleNumber {
  static canHandle(number: number) {
    return number === 6
  }

  quantity() {
    return '1'
  }

  container(): string {
    return 'six-pack'
  }
}

BottleNumber.register(BottleNumber6)
