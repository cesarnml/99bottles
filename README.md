# 99 Bottles of OOP Cheatsheet

- [99 Bottles of OOP Cheatsheet](#99-bottles-of-oop-cheatsheet)
  - [Chapters](#chapters)
  - [Notes](#notes)
    - [Preface](#preface)
    - [Introduction](#introduction)
    - [Chapter 01 - Rediscovering Simplicity](#chapter-01---rediscovering-simplicity)

## Chapters

- [x] ~~_Preface_~~ [2025-04-21]
- [x] ~~_Introduction_~~ [2025-04-21]
- [ ] Chapter 01 - Rediscovering Simplicity
- [ ] Chapter 02 - Test Driving Shameless Green
- [ ] Chapter 03 - Unearthing Concepts
- [ ] Chapter 04 - Practicing Horizontal Refactoring
- [ ] Chapter 05 - Separating Responsibilities
- [ ] Chapter 06 - Achieving Openness
- [ ] Chapter 07 - Manufacturing Intelligence
- [ ] Chapter 08 - Developing a Programming Aesthetics
- [ ] Chapter 09 - Reaping the Benefits of Design

## Notes

### Preface

- Authors:
  - Sandi Metz
  - Katrina Owen
  - TJ Stankus
- This book teaches you to write cost-effective, maintainable, and pleasing code.

> "While reading, resist the urge to resist."

> "While reading has value, doing has more."

### Introduction

> "Writing code is the _process_ of working your way to the next stable end point, not the end point itself. You don't know the answer in advance, but instead, you are seeking it"

### Chapter 01 - Rediscovering Simplicity

> "The code you write should meet two often-contradictory goals. It must remain concrete enough to be understood while simultaneously being abstract enough to allow for change."

- Good OO requires 3 things:

  - 1. Testing. Knowledge of how to write good tests.
  - 2. Refactoring. Ability to rearrange existing code without breaking it.
  - 3. OO. Deep understanding of the concepts behind OO programming and design

- Confusing passage:
  - > "Have you injected a dependency instead of hard-coding the class name of a collaborator? The receiver can now freely depend on new and previously unforeseen objects, but it must remain ignorant of their actual class."
  - Something to do with `dependency injection` wrt to `collaborator class name` ...
  - AI Explanation:
    Instead of a class directly instantiating or referencing another class (hard-coding the collaborator), you "inject" the dependency—usually by passing it in as a parameter (to a constructor or method). This allows the class (the receiver) to work with any object that meets the expected interface, not just a specific class. The receiver doesn't need to know the actual class of the collaborator, making the code more flexible, testable, and open to extension.

```js
// Instead of this (hard-coded):
this.logger = new ConsoleLogger();

// Use dependency injection:
constructor(logger) {
  this.logger = logger;
}
```

> "DRYing out code inserts a level of indirection between the place that uses behavior and the place that defines it."

> "There's a sweet spot that represents the perfect compromise between comprehension and changeability, and it's your job as a programmer to find it."
