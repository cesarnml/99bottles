export type RolePlayer = {
  lyrics: (number: number) => string
}

export const testPlaysVerseRole = (rolePlayer: RolePlayer) => {
  test('plays verse role', () => {
    expect(rolePlayer).toHaveProperty('lyrics', expect.any(Function))
  })
}
