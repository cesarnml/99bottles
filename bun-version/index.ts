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

  verse(num: number) {
    return (
      `${capitalize(this.quantity(num))} ${this.container(num)} of beer on the wall, ${this.quantity(num)} ${this.container(num)} of beer.\n` +
      `${this.response(num)}, ${this.quantity(num - 1)} ${this.container(num - 1)} of beer on the wall.\n`
    )
  }

  response(num: number) {
    switch (num) {
      case 0:
        return 'Go to the store and buy some more'
      default:
        return `Take ${this.pronoun(num)} down and pass it around`
    }
  }

  pronoun(num: number) {
    switch (num) {
      case 1:
        return 'it'
      default:
        return 'one'
    }
  }

  quantity(num: number) {
    switch (true) {
      case num < 0:
        return '99'
      case num === 0:
        return 'no more'
      case num === 6:
        return '1'
      default:
        return num.toString()
    }
  }

  container(num: number) {
    switch (num) {
      case 1:
        return 'bottle'
      case 6:
        return 'six-pack'
      default:
        return 'bottles'
    }
  }
}
