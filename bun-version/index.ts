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
      `${capitalize(this.quantity(number))} ${this.container(number)} of beer on the wall, ${this.quantity(number)} ${this.container(number)} of beer.\n` +
      `${this.action(number)}, ${this.quantity(this.successor(number))} ${this.container(this.successor(number))} of beer on the wall.\n`
    )
  }

  successor(number: number) {
    switch (number) {
      case 0:
        return 99
      default:
        return number - 1
    }
  }

  action(number: number) {
    switch (number) {
      case 0:
        return 'Go to the store and buy some more'
      default:
        return `Take ${this.pronoun(number)} down and pass it around`
    }
  }

  pronoun(number: number) {
    switch (number) {
      case 1:
        return 'it'
      default:
        return 'one'
    }
  }

  quantity(number: number) {
    switch (true) {
      case number === 0:
        return 'no more'
      case number === 6:
        return '1'
      default:
        return number.toString()
    }
  }

  container(number: number) {
    switch (number) {
      case 1:
        return 'bottle'
      case 6:
        return 'six-pack'
      default:
        return 'bottles'
    }
  }
}
