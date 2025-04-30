# 99 Bottles of OOP Cheatsheet

- [99 Bottles of OOP Cheatsheet](#99-bottles-of-oop-cheatsheet)
  - [Chapters](#chapters)
  - [Notes](#notes)
    - [Preface](#preface)
    - [Introduction](#introduction)
    - [Chapter 01 - Rediscovering Simplicity](#chapter-01---rediscovering-simplicity)
      - [1.1 Simplifying Code](#11-simplifying-code)
      - [1.2 Judging Code](#12-judging-code)
      - [1.3 Summary](#13-summary)
    - [Chapter 02 - Test Driving Shameless Green](#chapter-02---test-driving-shameless-green)
      - [2.1 Understanding Testings](#21-understanding-testings)
      - [2.2 Writing the First Test](#22-writing-the-first-test)
      - [2.3 Removing Duplication](#23-removing-duplication)
      - [2.4 Tolerating Duplication](#24-tolerating-duplication)
      - [2.5 Hewing to the Plan](#25-hewing-to-the-plan)
      - [2.6 Exposing Responsibilities](#26-exposing-responsibilities)
      - [2.7 Choosing Names](#27-choosing-names)
      - [2.8 Revealing Intentions](#28-revealing-intentions)
      - [2.9 Writing Cost-Effective Tests](#29-writing-cost-effective-tests)
      - [2.10 Avoiding te Echo-Chamber](#210-avoiding-te-echo-chamber)
      - [2.11 Considering Options](#211-considering-options)
      - [2.12 Summary](#212-summary)
    - [Chapter 03 - Unearthing Concepts](#chapter-03---unearthing-concepts)
      - [3.1 Listening to Change](#31-listening-to-change)
      - [3.2 Starting With the Open/Closed Principle](#32-starting-with-the-openclosed-principle)
      - [3.3 Recognizing Code Smells](#33-recognizing-code-smells)
      - [3.4 Identifying the Best Point of Attack](#34-identifying-the-best-point-of-attack)
      - [3.5 Refactoring Systematically](#35-refactoring-systematically)
      - [3.6 Following the Flocking Rules](#36-following-the-flocking-rules)
      - [3.7 Converging on Abstractions](#37-converging-on-abstractions)
      - [3.8 Summary](#38-summary)

## Chapters

- [x] ~~_Preface_~~ [2025-04-21]
- [x] ~~_Introduction_~~ [2025-04-21]
- [x] ~~_Chapter 01 - Rediscovering Simplicity_~~ [2025-04-22]
- [x] ~~_Chapter 02 - Test Driving Shameless Green_~~ [2025-04-28]
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

#### 1.1 Simplifying Code

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

> There's a sweet spot that represents the perfect compromise between comprehension and changeability, and it's your job as a programmer to find it.

- `Incomprehensibly Concise` solution's main sin is the use of nested ternaries which are the work of the devil

- Nice burn:
  - > "The code ... performs a neat trick. It manages to be concise to the point of incomprehensibility while simultaneously retaining loads of duplication."

> "Nested conditionals make code harder for humans to parse; this style of coding raises costs without providing benefits."

> "... if you want to achieve maximum confusion, you can interpolate duplicated logic _inside_ strings"

> "a 'method' is defined on an object, and contains behavior."

> "You 'send a message' to an object to invoke behavior."

- `calling` a method implies knowledge of implementation. `sending a message` suggest willful ignorance of receiver implementation details

Qualitative Code Quality Questions:

- 1. How difficult was it to write?
- 2. How hard is it to understand?
- 3. How expensive will it be to change?

> "The past ("was it") is a memory, the future ("will it be") is imaginary, but the present ("is it") is true right now."

> "Brevity may be the soul of wit, but it quickly becomes tedious in code."

- `Speculatively General`:

  - > "You must resist being clever for its own sake."
  - > "it is incumbent upon you to accept the _harder_ task and write simpler code."

- `Concretely Abstract`

> "Recognize ... that DRYing out code is not free. It adds a level of indirection, and layers of indirection make the _details_ of what's happening harder to understand."

> "[When you name a] method after what it does right now ... you can never change that internal implementation without ruining the method name."

> "You should name methods not after what they do, but after what they mean, what they represent in the context of your domain."

- `Shameless Green`
- Close to the solution that I implemented, except I added a level of abstraction at each line of the verse level

#### 1.2 Judging Code

> "Any pile of code an be made to _work_; good code not only works, but is also simple, understandable, expressive and changeable."

- Fact-Based Code Quality Metrics:
  1. Source Lines of Code (SLOC or LOC)
  2. Cyclomatic Complexity
  3. Assignments, Branches, and Conditions (ABC) Metric

#### 1.3 Summary

> "It doesn't dispute that DRY is good, rather, it believes that it is cheaper to manage temporary duplication than to recover from incorrect abstractions."

> "Code that's good enough when nothing ever changes may _not_ be good enough when things do."

### Chapter 02 - Test Driving Shameless Green

#### 2.1 Understanding Testings

- Kent Beck _Red/Green/Refactor_ cycle aka "the TDD mantra"

> "Quick green excuses all sins."

> "The Shameless Green solution strives for maximum understandabillity but is generally unconcerned with changeability."

#### 2.2 Writing the First Test

> "While in the 'writing tests' hat, you keep your eye on the big picture and work your way forward with the overall plan in mind. When in the 'writing code' hat, you pretend to know nothing other than the requirements specified by the tests at hand."

#### 2.3 Removing Duplication

> "As the tests get more specific, the code gets more generic."

#### 2.4 Tolerating Duplication

- Question to ask when DRYing:
  - 1. _Does the change I'm contemplating make the code harder to understand?_
  - 2. _What is the future cost of doing nothing now?_
  - 3. _When will the future arrive, or how soon will I get more information?_

> "It's better to tolerate duplication than to anticipate the wrong abstraction.

#### 2.5 Hewing to the Plan

> "The goal [of Shameless Green] to maximize your understanding of the problem and to unearth all available information before committing to abstractions."

- `switch` implies that every condition checks for equality against an explicit value. Readers of switch statements expect condition to be fundamentally the same.

- The goal is to quickly maximize the number of whole examples before extracting abstractions from their parts.

#### 2.6 Exposing Responsibilities

> "Duplication is useful when it supplies independent, specific examples of a general concept that you don't yet understand."

> "Code longs to be as ignorant as possible."

- 3 Wars to Make Test Pass:
  - 1. Fake It ("Til You Make It")
  - 2. Obvious Implementation
  - 3. Triangulate - _"conservatively drive abstraction with tests"_ - Write multiple broken test, then fix all of them with one bit of code

> "Developing the habit of writing just enough code to pass the tests forces you to write better tests. It also provides an antidote for the hubris of thinking you know that's right when you're actually wrong."

#### 2.7 Choosing Names

> "Knowledge that one object has about another creates a dependency. Dependencies tie objects together, exacerbating the cost of change. Your goal as a _message sender_ is to incur a limited number of dependencies, and your obligation as a _method provider_ is to inflict few."

#### 2.8 Revealing Intentions

> "The distinction between intention and implementation ... allows you to understand a computation first in essence and later, if necessary, in detail."

#### 2.9 Writing Cost-Effective Tests

> "The first step in learning the art of testing is to understand how to write tests that confirm _what_ your code does without any knowledge of _how_ your code does it."

#### 2.10 Avoiding te Echo-Chamber

- Clarity over DRY in test

#### 2.11 Considering Options

> "Tests are not the place for abstractions - they are the place for concretions. Abstractions belong in code."

> "DRY is a very good idea in code, but much less useful in tests. When testing, the best choice is very often just to write it down."

#### 2.12 Summary

> "Testing, done well, speeds development and lowers costs."

> "TDD ... commit to writing code in small steps."

> "Tests ... make it safe and easy to refactor if decoupled from code."

> "Good tests not only tell a story, but they lead, step by step, to a well-organized solution."

### Chapter 03 - Unearthing Concepts

#### 3.1 Listening to Change

#### 3.2 Starting With the Open/Closed Principle

#### 3.3 Recognizing Code Smells

#### 3.4 Identifying the Best Point of Attack

#### 3.5 Refactoring Systematically

#### 3.6 Following the Flocking Rules

#### 3.7 Converging on Abstractions

#### 3.8 Summary
