# 99 Bottles of OOP Cheatsheet

Notes from reading ["99 Bottles of OOP"](https://sandimetz.com/99bottles) by Sandi Metz, Katrina Owen, and TJ Stankus.

**Key References:**

- [99 Bottles of OOP](https://sandimetz.com/99bottles) - The main book
- [Refactoring](https://martinfowler.com/books/refactoring.html) - Martin Fowler's guide to refactoring
- [Design Patterns](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612) - The "Gang of Four" book
- [SOLID Principles](https://web.archive.org/web/20150906155800/http://www.objectmentor.com/resources/articles/Principles_and_Patterns.pdf) - Uncle Bob's paper on SOLID design principles

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
      - [2.10 Avoiding the Echo-Chamber](#210-avoiding-the-echo-chamber)
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
    - [Chapter 04 - Practicing Horizontal Refactor](#chapter-04---practicing-horizontal-refactor)
      - [4.1 Replacing Differences with Sameness](#41-replacing-differences-with-sameness)
      - [4.2 Equivocating About Names](#42-equivocating-about-names)
      - [4.3.Deriving Names from Responsibilities (2 pages)](#43deriving-names-from-responsibilities-2-pages)
      - [4.4 Choosing Meaningful Defaults (4 pages)](#44-choosing-meaningful-defaults-4-pages)
      - [4.5 Seeking Stable Landing Points (2 pages)](#45-seeking-stable-landing-points-2-pages)
      - [4.6 Obeying the Liskov Substitution Principle (6 pages)](#46-obeying-the-liskov-substitution-principle-6-pages)
      - [4.7 Taking Bigger Steps Back (4 pages)](#47-taking-bigger-steps-back-4-pages)
      - [4.8 Discovering Deeper Abstractions (8 pages)](#48-discovering-deeper-abstractions-8-pages)
      - [4.9 Depending on Abstractions (4 pages)](#49-depending-on-abstractions-4-pages)
      - [4.10 Summary (1 page)](#410-summary-1-page)
    - [Chapter 05 - Separating Responsibilities (41 pages)](#chapter-05---separating-responsibilities-41-pages)
      - [5.1 Selecting the Target Code Smell (11 pages)](#51-selecting-the-target-code-smell-11-pages)
      - [5.2 Extracting Classes (16 pages)](#52-extracting-classes-16-pages)
      - [5.3 Appreciating Immutability (2 pages)](#53-appreciating-immutability-2-pages)
      - [5.4 Assuming Fast Enough (3 pages)](#54-assuming-fast-enough-3-pages)
      - [5.5 Creating BottleNumbers (4 pages)](#55-creating-bottlenumbers-4-pages)
      - [5.6 Recognizing Liskov Violations (5 pages)](#56-recognizing-liskov-violations-5-pages)
      - [5.7 Summary (1 page)](#57-summary-1-page)
    - [Chapter 06 - Achieving Openness (40 pages)](#chapter-06---achieving-openness-40-pages)
      - [6.1 Consolidating Data Clumps (4 pages)](#61-consolidating-data-clumps-4-pages)
      - [6.2 Making Sense of Conditionals (4 pages)](#62-making-sense-of-conditionals-4-pages)
      - [6.3 Replacing Conditionals with Polymorphism (14 pages)](#63-replacing-conditionals-with-polymorphism-14-pages)
      - [6.4 Transitioning Between Types (11 pages)](#64-transitioning-between-types-11-pages)
      - [6.5 Making the Easy Change (4 pages)](#65-making-the-easy-change-4-pages)
      - [6.6 Defending the Domain (2 pages)](#66-defending-the-domain-2-pages)
      - [6.7 Summary (1 page)](#67-summary-1-page)
    - [Chapter 07 - Manufacturing Intelligence (14 pages)](#chapter-07---manufacturing-intelligence-14-pages)
      - [7.1 Contrasting the Concrete Factory with Shameless Green (3 pages)](#71-contrasting-the-concrete-factory-with-shameless-green-3-pages)
      - [7.2 Fathoming Factories (2 pages)](#72-fathoming-factories-2-pages)
      - [7.3 Opening the Factory (2 pages)](#73-opening-the-factory-2-pages)
      - [7.4 Supporting Arbitrary Class Names (4 pages)](#74-supporting-arbitrary-class-names-4-pages)
      - [7.5 Dispersing The Choosing Logic (3 pages)](#75-dispersing-the-choosing-logic-3-pages)
      - [7.6 Self-registering Candidates (4 pages)](#76-self-registering-candidates-4-pages)
      - [7.7 Summary (1 page)](#77-summary-1-page)
    - [Chapter 08 - Developing a Programming Aesthetics (38 pages)](#chapter-08---developing-a-programming-aesthetics-38-pages)
      - [8.1 Appreciating the Mechanical Process (5 pages)](#81-appreciating-the-mechanical-process-5-pages)
      - [8.2 Clarifying Responsibilities with Pseudocode (2 pages)](#82-clarifying-responsibilities-with-pseudocode-2-pages)
      - [8.3 Extracting the Verse (3 pages)](#83-extracting-the-verse-3-pages)
      - [8.4 Coding by Wishful Thinking (3 pages)](#84-coding-by-wishful-thinking-3-pages)
      - [8.5 Inverting Dependencies (7 pages)](#85-inverting-dependencies-7-pages)
      - [8.6 Obeying the Law of Demeter (8 pages)](#86-obeying-the-law-of-demeter-8-pages)
      - [8.7 Identifying What The Verse Method Wants (5 pages)](#87-identifying-what-the-verse-method-wants-5-pages)
      - [8.8 Pushing Object Creation to the Edge (7 pages)](#88-pushing-object-creation-to-the-edge-7-pages)
      - [8.9 Summary (2 pages)](#89-summary-2-pages)
    - [Chapter 09 - Reaping the Benefits of Design (41 pages)](#chapter-09---reaping-the-benefits-of-design-41-pages)
      - [9.1 Choosing which Units to Test (7 pages)](#91-choosing-which-units-to-test-7-pages)
      - [9.2 Reorganizing Tests (9 pages)](#92-reorganizing-tests-9-pages)
      - [9.3 Seeking Context Independence (16 pages)](#93-seeking-context-independence-16-pages)
      - [9.4 Communicating With the Future (10 pages)](#94-communicating-with-the-future-10-pages)

## Chapters

- [x] ~~_Preface_~~ [2025-04-21]
- [x] ~~_Introduction_~~ [2025-04-21]
- [x] ~~_Chapter 01 - Rediscovering Simplicity_~~ [2025-04-22]
- [x] ~~_Chapter 02 - Test Driving Shameless Green_~~ [2025-04-28]
- [x] ~~_Chapter 03 - Unearthing Concepts_~~ [2025-05-13]
- [x] ~~_Chapter 04 - Practicing Horizontal Refactoring_~~ [2025-05-14]
- [x] ~~_Chapter 05 - Separating Responsibilities_~~ [2025-05-15]
- [x] ~~_Chapter 06 - Achieving Openness_~~ [2025-05-16]
- [x] ~~_Chapter 07 - Manufacturing Intelligence_~~ [2025-05-16]
- [ ] Chapter 08 - Developing a Programming Aesthetics
- [ ] Chapter 09 - Reaping the Benefits of Design

## Notes

---

### Preface

- Authors:
  - Sandi Metz
  - Katrina Owen
  - TJ Stankus
- This book teaches you to write cost-effective, maintainable, and pleasing code.

> "While reading, resist the urge to resist."

> "While reading has value, doing has more."

---

### Introduction

> "Writing code is the _process_ of working your way to the next stable end point, not the end point itself. You don't know the answer in advance, but instead, you are seeking it"

---

### Chapter 01 - Rediscovering Simplicity

#### 1.1 Simplifying Code

> "The code you write should meet two often-contradictory goals. It must remain concrete enough to be understood while simultaneously being abstract enough to allow for change."

- Good OO requires 3 things:

  - 1. Testing. Knowledge of how to write good tests.
  - 2. Refactoring. Ability to rearrange existing code without breaking it.
  - 3. OO. Deep understanding of the concepts behind OO programming and design

- Key Concept - Dependency Injection:

  > "Have you injected a dependency instead of hard-coding the class name of a collaborator? The receiver can now freely depend on new and previously unforeseen objects, but it must remain ignorant of their actual class."

  Explanation:
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

**Qualitative Code Quality Questions:**

1. How difficult was it to write?
2. How hard is it to understand?
3. How expensive will it be to change?

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

**Fact-Based Code Quality Metrics:**

1. Source Lines of Code (SLOC or LOC)
2. Cyclomatic Complexity
3. Assignments, Branches, and Conditions (ABC) Metric

#### 1.3 Summary

> "It doesn't dispute that DRY is good, rather, it believes that it is cheaper to manage temporary duplication than to recover from incorrect abstractions."

> "Code that's good enough when nothing ever changes may _not_ be good enough when things do."

---

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

- 3 Ways to Make Tests Pass:
  - 1. Fake It ("Til You Make It")
  - 2. Obvious Implementation
  - 3. Triangulation - _"conservatively drive abstraction with tests"_ - Write multiple failing tests, then fix all of them with one code change

> "Developing the habit of writing just enough code to pass the tests forces you to write better tests. It also provides an antidote for the hubris of thinking you know that's right when you're actually wrong."

#### 2.7 Choosing Names

> "Knowledge that one object has about another creates a dependency. Dependencies tie objects together, exacerbating the cost of change. Your goal as a _message sender_ is to incur a limited number of dependencies, and your obligation as a _method provider_ is to inflict few."

#### 2.8 Revealing Intentions

> "The distinction between intention and implementation ... allows you to understand a computation first in essence and later, if necessary, in detail."

#### 2.9 Writing Cost-Effective Tests

> "The first step in learning the art of testing is to understand how to write tests that confirm _what_ your code does without any knowledge of _how_ your code does it."

#### 2.10 Avoiding the Echo-Chamber

- Favor clarity over DRY in tests

#### 2.11 Considering Options

> "Tests are not the place for abstractions - they are the place for concretions. Abstractions belong in code."

> "DRY is a very good idea in code, but much less useful in tests. When testing, the best choice is very often just to write it down."

#### 2.12 Summary

> "Testing, done well, speeds development and lowers costs."

> "TDD ... commit to writing code in small steps."

> "Tests ... make it safe and easy to refactor if decoupled from code."

> "Good tests not only tell a story, but they lead, step by step, to a well-organized solution."

---

### Chapter 03 - Unearthing Concepts

- understandability, straight-forwardness, and efficiency vs changeability
- procedural programming ... limitations
- unearth new concepts
- In the real world, requirements _do_ change, and when that happens, the standards for code _rise_

#### 3.1 Listening to Change

- Code is expensive.
- Writing it costs time or money
- A new requirement tells you **exactly** how the code should change.
- Code that needs to be changed must be changeable.
- Story: "Users should see '1 six-pack' in place of '6 bottles'"
- Conditionals breed, and now that this one has started reproducing, you must do something to stop it.
- Conditionals are the bane of OO. (I've always felt this was the truth.)
- Clarify requirements, and then write the minimum necessary code.
- Now that someone has asked for a change, you have license to improve the code

#### 3.2 Starting With the Open/Closed Principle

- "Open for extension and closed for modification."
- Code is open to a new requirement when you can add that requirement without changing existing code.
- Michael Feathers and Robert Martin popularized SOLID:
  - Single Responsibility
  - Open for Extension, Closed for Modification
  - Liskov substitution
  - Interface Segregation
  - Dependency Inversion

#### 3.3 Recognizing Code Smells

- The trick to successfully improving code that contains many flaws is to isolate and correct them one at a time.
- If you can identify a smell within code, you can look up the _curative refactoring_, and apply [it] to remove the flaw.
- [Martin Fowler's "Refactoring" book](https://martinfowler.com/books/refactoring.html) is an excellent investment

#### 3.4 Identifying the Best Point of Attack

- The plan is to nibble away, one code smell at a time, in faith that the path to openness will be revealed.

#### 3.5 Refactoring Systematically

According to Martin Fowler:

> "Refactoring is the process of changing a software system in such a way that it does not alter the external behavior of the code yet improves its internal structure."

- Two Step Approach to New Requirements:
  - 1. Refactor (safe refactoring relies upon tests)
  - 2. TDD once code is Open to new requirement
- Tests that make assertions about _how_ things are done, rather than _what_ actually happens, are the prime contributors to this predicament
- If tests are flawed, then improve the tests first before beginning refactoring
- Successful refactoring _lean_ on green.

#### 3.6 Following the Flocking Rules

`Flocking Rules`

1. Select the things that are most alike.
2. Find the smallest difference between them.
3. Make the simplest change that will remove that difference.

- If you take a big step and encounter an error, revert, and make a smaller one.
- For now:
  - 1. Change only one line at a time.
  - 2. Run the tests after every change.
  - 3. If the tests fail, undo and make a better change.

#### 3.7 Converging on Abstractions

- DRYing out sameness has _some_ value, but DRYing out difference is more meaningful.
- ["Gang of Four" Design Patterns book](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612) by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides - A foundational text on design patterns
- Difference holds the key to understanding
- The general rule is that the name of a thing should be one level of abstraction higher than the thing itself.
  - Language of the "domain"
- Naming things after domain concepts improves communication between you and the folks who pay the bills. Only good can come of this.
- Making a slew of simultaneous changes is not refactoring - it's re*hack*toring
- Real refactoring is comfortingly predictable, and saves brainpower for more through-provoking challenges.

#### 3.8 Summary

- Making existing code open to a new requirement often requires identifying and naming abstractions.
- The `Flocking Rules` concentrate on turning differences into sameness, and thus are useful tools for unearthing abstractions.

---

### Chapter 04 - Practicing Horizontal Refactor

- The Goal: A single, more abstract, template that produces every possible verse

#### 4.1 Replacing Differences with Sameness

- To remove conditionals, a step-up in abstraction is required

#### 4.2 Equivocating About Names

- Approaches to naming abstractions:
  - 1. Take 5 minutes and pick a "good enough" name. Aim to improve it later
  - 2. Use a placeholder name that will demand update later when you know more
  - 3. Ask your local "naming-guru"

#### 4.3.Deriving Names from Responsibilities (2 pages)

- When creating an abstraction, first describe its responsibility _as you understand it at this moment_, then choose a name which reflects that responsibility

#### 4.4 Choosing Meaningful Defaults (4 pages)

- In order to stick to 1-line refactorings (TDD), choose sensible defaults (which you clean up before finishing refactor implementation)

#### 4.5 Seeking Stable Landing Points (2 pages)

- The Flocking Rules lead to consistent code, and _consistency matters deeply._"

#### 4.6 Obeying the Liskov Substitution Principle (6 pages)

- Inconsistency in return types forces the sender of a message to know more than than it should.
- Every piece of knowledge is a dependency.
- Liskov prohibits you from doing anything that would force the sender of a message to test the returned result in order to know how to behave
- Liskov violations force message senders to have knowledge of the various return types, and to either treat them differently, or convert them into something consistent.

#### 4.7 Taking Bigger Steps Back (4 pages)

- If you take bigger [refactoring] steps and the tests begin to fail, there's _something about the problem that you don't understand_. If this happens, don't push forward and refactor under red. Undo, return to green, and make incremental changes until you regain clarity.

#### 4.8 Discovering Deeper Abstractions (8 pages)

- Often the underlying concept is not immediately obvious - this is unfortunately a constant of programming life
- The discovery process requires patience and systematic exploration of the code

#### 4.9 Depending on Abstractions (4 pages)

- Abstractions are beneficial in many ways.
  - 1. Consolidate code into a single place so that it can be changed with ease
  - 2. They _name_ the code chuck ... name an _idea_ your code relies on
  - 3. To extract most of the benefit the abstraction must be referenced everywhere it applies

#### 4.10 Summary (1 page)

- Stick to the plan (Flocking Rules) and have faith that the correct abstraction will slowly emerge

---

### Chapter 05 - Separating Responsibilities (41 pages)

- This chapter explores what it means to:
  - Model abstractions
  - Rely on messages
  - The consequences of mutation
  - Perils of premature performance optimization

#### 5.1 Selecting the Target Code Smell (11 pages)

- Code should be open for extension and closed for modification
- One way to get better at identifying smells is to practice describing the characteristics of code.
- Questions to Ask when searching for `code smells`
  - Do any methods have the same shape.
  - Do any methods take the same argument name.
  - Is the same argument name usage mean the same thing?
  - If you were to break up a big class into two classes where is the dividing line.
- Eureka: verse `number` vs bottle `number` (container `number`)
- Superfluous difference raises the cost of reading code, and increases the difficulty of future refactorings
- An OO mindset is deeply suspicious of conditionals!
- There is a _big difference_ between a conditional that selects the correct object and one that supplies behavior.
  - The first is acceptable and generally unavoidable.
  - The second suggest that you are missing objects in your domain.
- **Code is striving for ignorance, and preserving ignorance requires minimizing dependencies.**

#### 5.2 Extracting Classes (16 pages)

- _Primitive Obsession_:
  - When built-in language primitives are used to represent a concept in problem domain and are incorrectly used to supply behavior
  - Fix with _Extract Class_
  - It's easy to imagine creating objects that stand in for things, but the power of OO is that it lets you model ideas
  - Transforming concepts into discrete classes separates responsibilities and makes the overall application easier to understand, test, and change.
  - "Name things at one higher level of abstraction" rule applies more to methods than to classes
    - "You should name methods after what they _mean_, classes can be named after what they _are_."
- "The point of the _Primitive Obsession/Extract Class_ refactoring is to create a smarter object that can be used to model the concept in the domain. This smarter object, by definition, knows both the value of the primitive and its associated behavior."
- To convince yourself that you haven't missed any other senders, temporarily add a guard clause at the beginning of the method that throws an exception if the method is called with a value that doesn't make sense.
  ```js
  if (arguments.length !== 1) {
    throw new Error('This method only accepts one argument');
  }
  ```
  - This will force you to look at all the places that call the method, and if you find any that don't make sense, you can refactor them to use the new class.
  - Hint: `arguments` object can be useful for this purpose.

#### 5.3 Appreciating Immutability (2 pages)

- To _mutate_ is to change. _State_ is the current condition of an object. A _variable_ is "that which varies".
- "The real world is pervaded by this idea - what exists, will change."
- Most object-oriented programmers write code that both expects and relies upon object mutation. Objects are constructed, used, mutated, and then used again.
- It can be disorientating to imagine reality as constructed by the functional programmer, where objects are created, used, and then discarded -- and never changed.
- Immutability is a powerful tool for managing complexity, and it can help you write code that is easier to reason about, test, and maintain. Also immutable objects are inherently thread-safe, which makes them a good choice for concurrent programming.

#### 5.4 Assuming Fast Enough (3 pages)

- Premature optimization is the root of all evil.

#### 5.5 Creating BottleNumbers (4 pages)

- The first solution to any problem should avoid caching, use immutable objects, and _treat object creation as free_.

#### 5.6 Recognizing Liskov Violations (5 pages)

- You have every right to expect any method named `successor` to return an object that implements the same API as the receiver.
- Liskov Substitution Principle (LSP) states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.

```js
// Example of Liskov Substitution Principle violation
class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  successor() {
    return this.number + 1; // Returns a number, not a BottleNumber
  }
}
const bottleNumber = new BottleNumber(number);
const nextBottleNumber = new BottleNumber(bottleNumber.successor());
```

#### 5.7 Summary (1 page)

- It's possible that your faith is being tested. (lol)

---

### Chapter 06 - Achieving Openness (40 pages)

- The increasing isolation of the concepts that need to vary is an indication that the code is moving in the right direction.

#### 6.1 Consolidating Data Clumps (4 pages)

- _Data clump_ is official about _data_, and is defined as the situation in which several data fields routinely occur together in the same places, but are not encapsulated in a single object.
- Having a clump of data usually means you are missing a concept in your domain model.
- Full-grown _Data Clumps_ are usually removed by extracting a class that encapsulates the data and its associated behavior.
- Programmers add blank lines to signify changes of topic. The presence of multiple topics suggests the existence of multiple responsibilities, which make code harder to understand when reading, and easier to harm when changing.

#### 6.2 Making Sense of Conditionals (4 pages)

- Fowler offers several curative refactoring recipes. The two main contenders are _Replace Conditional with Polymorphism_ (uses inheritance) and _Replace Conditional with Strategy_. (uses composition)
- On expert programmers:
  > "Skilled programmers are good at picking what best to do next. For many problems, they can immediately identify the code smell that will be most fruitful to resolve. They have excellent judgement. Their decision-making process looks intuitive and effortless, but also inimitable, which makes their actions simultaneously inspiring and disheartening. It's as if they have a secret understanding of the underlying patterns of code, one not granted to mere mortals."
- Practice _builds_ intuition. Do it enough, and you'll seem magical too!

#### 6.3 Replacing Conditionals with Polymorphism (14 pages)

- In OO, polymorphism is the ability of different classes to be treated as instances of the same class through a common interface.
- In OO, polymorphism refers to the idea of having many different kinds of objects (classes) that respond to the same message. _Senders_ of the message needn't care with which of the message needn't care with which of the possible receivers they are communicating. Polymorphism allows senders to depend on the _message_ while remaining ignorant of the _type_, or class, of the receiver. Senders don't care what receivers are; instead, they depend on what receivers do.
- If introducing polymorphism improved the code, this new version ought to tell an accurate and easily understood story about the domain.

#### 6.4 Transitioning Between Types (11 pages)

- Liskov violations are insidious, and over time cause increasing harm.
- Adding type information defeats polymorphism, and forces you to check the type of the receiver before sending this message. This vastly complicates the code, and makes it harder to understand.
- Requiring a factory to check the type of its input argument is anathema to OO.
- Correcting the Liskov violation is important because object-oriented programming, especially in dynamically-typed languages like JavaScript, relies on _explicit_ trust in the _implicit_ contract between the sender and receiver of a message.

#### 6.5 Making the Easy Change (4 pages)

- "Make the change easy (warning: this may be hard), then make the easy change."

#### 6.6 Defending the Domain (2 pages)

- Less code doesn't always mean better code.
- Clever shortcuts are a false economy. Invest in code that tells the truth.

#### 6.7 Summary (1 page)

- The goal of this chapter is to make the code open to change by removing Liskov violations and replacing conditionals with polymorphism.
- There's a whole world of different styles of factories waiting to be explored.

---

### Chapter 07 - Manufacturing Intelligence (14 pages)

- The need for conditional logic did not disappear. Some code, somewhere, has to know how to select the right bottle number class for any situation.
- In this chapter, that simple factory (BottleNumber.for) launches a greater exploration of factories in general.

#### 7.1 Contrasting the Concrete Factory with Shameless Green (3 pages)

- Factories don't know what to do: instead, they know how to _choose_ who does. They consolidate the choosing and separate the chosen. Shameless Green was procedural because it combined these two things (choosing explicit behavior); the polymorphic approach is object-oriented because it breaks apart the choosing from its implementation.

#### 7.2 Fathoming Factories (2 pages)

- Object-oriented applications rely on polymorphism. Polymorphism results in multiple classes that play a common role. The power of polymorphism is that these role-playing objects are interchangeable from _the message sender's point of view._
- All players of a role share a common API.
- The details of these alternate implementation are invisible to the outside world.
- Factories are where conditionals go to die.
- Factories vary along these dimensions:

  - 1. The factory can be open to new variants or closed.

  ```js
  class BottleNumber {
    static for(number) {
      let bottleNumberClass;

      try {
        bottleNumberClass = eval(`BottleNumber${number}`);
      } catch (e) {
        bottleNumberClass = BottleNumber;
      }

      return new bottleNumberClass(number);
    }
    // ...
  }
  ```

  - 2. The logic that chooses a variant can be owned by the factory or by the variant.
  - 3. The factory can be responsible for knowing/figuring out which classes are eligible to be manufactured or the variants can volunteer themselves

#### 7.3 Opening the Factory (2 pages)

- Class names are variables in JavaScript, so the `eval` method can take this string as na argument, and attempt to look up the corresponding class.
- Many folks have no idea that it's possible to locate a class using the string value of its name
- Good luck finding references to the classes whose names are dynamically constructed.
- Controlling the flow of a program with exceptions is roundly condemned on the Internet and so must be an evil to be avoid at all costs. (lol)
- Your goal is to minimize costs, and costs are determined by the situation at hand. There's no hard and fast rule about what's best. It just depends.
- A factory's fundamental job is to manufacture the correct player of a role.

#### 7.4 Supporting Arbitrary Class Names (4 pages)

- Key/Value Lookup Factory Redux Example:

```js
class BottleNumber {
  static for(number) {
    const number2BottleNumberClass = {
      0: BottleNumber0,
      1: BottleNumber1,
      6: BottleNumber6,
    };

    const bottleNumberClass = number2BottleNumberClass[number] || BottleNumber;

    return new bottleNumberClass[number]();
  }
}
```

- Procedures are often characterized by many changes of color
- Code that is more object-oriented tends to group like things together, with fewer changes of topic.
- The most efficient, expedient way to fulfill a new requirement may be to write a simple, unglamorous procedure, but if this procedure needs to change it should be converted into object oriented code.
- Procedural code can save you money when used to create small, isolated features that never need to change, but this style of coding will break the bank if used on large, shared features that core to your domain.
- OO asks you to break code up into small, cohesive pieces.
- The benefit of having smaller pieces is that each individual piece, relative to its procedural analog, is easier to understand and change. The corollary downside is that diving code into many small pieces can obscure the operation of the whole.

#### 7.5 Dispersing The Choosing Logic (3 pages)

- In the previous factory example, the factory knows everything.

  - It owns the choosing logic (the value of number is n), it knows the things that might be chosen (the class names), and it contains the logic to map between the two (number n means class x).
  - If the choosing logic changes in lockstep with code that lives in the class being chosen, then the choosing logic belongs in that class, not in the factory. (`BottleNumber.canHandle`)

  ```js
  class BottleNumber {
    static for(number) {
      const bottleNumberClass = [
        BottleNumber6,
        BottleNumber1,
        BottleNumber0,
        BottleNumber,
      ].find(candidate => candidate.canHandle(number));

      return new bottleNumberClass(number);
    }

    static canHandle(number) {
      return true;
    }
    // ...
  }

  class BottleNumber0 extends BottleNumber {
    static canHandle(number) {
      return number === 0;
    }
    // ...
  }

  class BottleNumber1 extends BottleNumber {
    static canHandle(number) {
      return number === 1;
    }
    // ...
  }

  class BottleNumber6 extends BottleNumber {
    static canHandle(number) {
      return number === 6;
    }
    // ...
  }
  ```

#### 7.6 Self-registering Candidates (4 pages)

```js
class BottleNumber {
  // ...
  static register(candidate) {
    BottleNumber.registry.unshift(candidate);
  }
  // ...
}

BottleNumber.registry = [BottleNumber];
```

#### 7.7 Summary (1 page)

- Maintainable OO code rests on polymorphism.

  - Constructing applications from families of small, interchangeable objects that represent variants of a role.

  ```js
  class BottleNumber {
    static for(number) {
      const bottleNumberClass = BottleNumber.registry.find(candidate =>
        candidate.canHandle(number)
      );

      return new bottleNumberClass(number);
    }

    static register(candidate) {
      BottleNumber.registry.unshift(candidate);
    }
    // ...
  }

  BottleNumber.registry = [BottleNumber];

  class BottleNumber0 extends BottleNumber {
    // ...
  }

  BottleNumber.register(BottleNumber0);

  class BottleNumber1 extends BottleNumber {
    // ...
  }

  BottleNumber.register(BottleNumber1);

  class BottleNumber6 extends BottleNumber {
    // ...
  }

  BottleNumber.register(BottleNumber6);
  ```

An interesting subtlety in the registration pattern above lies in how dependencies are managed. There are two ways candidate classes can register themselves:

1. Using explicit factory name (`BottleNumber.register(BottleNumber0)`):

   - Depends on knowing factory's name
   - More flexible about implementation (doesn't require inheritance)
   - Breaks if factory name changes
   - Example: `BottleNumber.register(SpecialContainer)` works even if `SpecialContainer` doesn't inherit

2. Using inheritance-based registration (`BottleNumber0.register(BottleNumber0)`):
   - Depends on inheritance to find register method
   - More flexible about factory name
   - Breaks if implementation moves away from inheritance
   - Example: Non-inheriting class can't use `SpecialContainer.register(SpecialContainer)`

The choice between these approaches is a bet on which dependency is more stable in your codebase:

- Is the factory name more likely to change than the inheritance structure?
- Or is the inheritance structure more likely to change than the factory name?

In most cases, the factory name tends to be more stable than implementation inheritance decisions, which is why the example uses the explicit factory name approach. This leaves you free to change how classes implement the interface without being locked into inheritance.

---

### Chapter 08 - Developing a Programming Aesthetics (38 pages)

- This chapter explores how to develop a sense of programming aesthetics and make systematic improvements to code design.
- The refactoring recipes tell you what to do while at the same tme forbidding you from wandering off to tinker on tangential shiny things.
- A requirement is implemented in a way that makes you fear for its maintainability
- Code smells and refactoring recipes represent the distilled judgement of many deeply experienced OO practitioners
  - [they] have developed a sense of what to actively do (or diligently avoid) in present code to preclude future pain

#### 8.1 Appreciating the Mechanical Process (5 pages)

- The story the current implementation tells is that all verses are alike in an abstract way, and that bottle numbers vary within each verse.
- Programmers add blank lines to indicate changes of topic, and changes of topic suggest multiple responsibilities.
  - Blank lines smell!
- Increasing indirection makes code harder to follow.
- Sadly, advocating changes to code based on feelings you can't explain is not likely to be convincing.

#### 8.2 Clarifying Responsibilities with Pseudocode (2 pages)

> "Paradoxically, when face with uncertainty about what to do next, it can sometimes help to sigh deeply, ignore everything you've learned, and you write a new conditional.

- Use pseudocode to explore and understand responsibilities before implementation
- Write down what you want the code to do, not how it should do it

#### 8.3 Extracting the Verse (3 pages)

- The first concern, as always, is what to name the new class. Classes should be named for exactly what they are ... `BottleVerse`

#### 8.4 Coding by Wishful Thinking (3 pages)

> "Write the code you wish you had and work backwards until you arrive at the code you currently want to improve"

#### 8.5 Inverting Dependencies (7 pages)

- `Dependency Inversion Principle (DIP) => "depend on abstractions, not concretions."
- Isolate the behavior you want to vary.
- One of the most fundamental concepts in OO is to isolate the behavior you want to vary.
- The injection point becomes a seam across which objects interact in a loosely-coupled way.
- `Dependency Injection Principle`:
  1. High-level modules should not depend upon low-level modules. Both should depend upon abstractions.
  2. Abstraction should not depend upon details. Details should depend upon abstractions.
- Isolating variants often requires that you invert dependencies

Examples of dependency inversion:

```js
// Before
class Verse {
  constructor(number) {
    this.number = new BottleNumber(number);
  }
}

// After
class Verse {
  constructor(bottleNumber) {
    this.number = bottleNumber;
  }
}
```

#### 8.6 Obeying the Law of Demeter (8 pages)

- Dependencies can't be avoided but should certainly be minimized. be alert for superfluous dependencies and remove them with extreme prejudice.
- Tightly-coupled code is difficult to test. Tightly-coupled object require adding lots of context, all of which must be provided in order to run any test.
- If test setup involves creating a bunch of increasingly distant objects, or if you find yourself putting stubs in stubs, it means that the object you are testing is too tightly coupled to other parts of your application.
- An object that's hard to test is attempting to warn you that it will be difficult to reuse.
- Objects may only send messages to direct collaborators
- Cure Law of Demeter violations via `message forwarding` methods.

#### 8.7 Identifying What The Verse Method Wants (5 pages)

- `new`-is-just-another-message-send
- The rule for injecting dependencies is that you should inject the thing you want to talk to.
- You should inject _instances_, not _classes_ to which you are forced to send `new` and then something else
- Testing is the first form of [code] reuse
- Pain in testing is a sign of a rigid application and an indication that there's something wrong with the design
- If you want something, just ask for it.
  - If the receiver doesn't know how to comply, teach it.
- Don't be trapped by what's current true, but instead, loosen coupling by _designing_ a conversation that embodies what the message sender wants.
- In instances, common behavior combines with differing data to create objects that collaborate to form your application.
- Putting domain behavior on the class side rather than on the instance side places a bet that this domain concept will never involve data that varies

#### 8.8 Pushing Object Creation to the Edge (7 pages)

- The _Blank Line_ code smell tells you that `#lyrics` probably violates the Single Responsibility Principle.
- Well-designed object-oriented application consist of loosely-coupled objects that rely on polymorphism to vary behavior.
- Injecting dependencies loosens coupling.
- Polymorphism isolates variant behavior into sets of interchangeable objects that look the same from the outside but behave differently on the inside.
- Application that use dependency injection evolve, naturally and of necessity, into system where object creation begins to separate from object use.
- Experienced object-oriented programmers know that applications most easily adapt to the unknown future if they:
  1. resist giving instance methods knowledge of concrete class names, and
  2. seek opportunities to move the object creation towards the edges of the application
- You should be eternally alert for instance methods that reference class names and perpetually on the lookout for ways to remove those references.

#### 8.9 Summary (2 pages)

- Vague feelings about. the rightness of code become part of your aesthetic once you can eloquently and convincingly use actual words to explain your concerns and proposed improvements
- Five precepts of good object-oriented programming aesthetic:
  1. Put domain behavior on instances
  2. Be averse to allowing instance methods to know the names of constants
  3. Seek to depend on injected abstractions rather than hard-coded concretions
  4. Push object creation to the edges, expecting objects to be created in one place and used in another.
  5. Avoid Demeter violations, using the temptation to create them as a spur to search for deeper abstractions
- The practical effect of following these precepts is to loosen the coupling between objects.
- The certainty of change coupled with the uncertainty of that change's location means that your best programming strategy is to strive to loosen the coupling of all code everywhere from the moment of initial creation.

---

### Chapter 09 - Reaping the Benefits of Design (41 pages)

This chapter focuses on how to leverage good design decisions and maintain them through proper testing strategies.

#### 9.1 Choosing which Units to Test (7 pages)

- Focus on testing _behavior_ rather than implementation
- Test public interfaces, not private implementation details
- Consider the cost/benefit ratio of each test

> "The true value of tests lies not in proving correctness, but in specifying behavior."

Guidelines for choosing test targets:

1. Test incoming messages (queries and commands)
2. Test outgoing commands that have side effects
3. Don't test outgoing query messages
4. Don't test private methods directly

#### 9.2 Reorganizing Tests (9 pages)

- Group tests by responsibility rather than implementation
- Use descriptive test names that convey behavior
- Maintain test independence
- Keep tests focused and specific

> "Tests are documentation. Make them tell a story."

Common test organization patterns:

```js
describe('BottleVerse', () => {
  // Group by behavior, not implementation
  describe('when creating verses', () => {
    it('handles regular numbers');
    it('handles zero');
    it('handles one');
  });

  describe('when rendering text', () => {
    it('includes the number of bottles');
    it('handles grammar correctly');
  });
});
```

#### 9.3 Seeking Context Independence (16 pages)

- Tests should be independent of their context
- Each test should set up its own complete environment
- Avoid shared state between tests
- Use dependency injection to control the test environment

> "Dependencies are the enemy of understanding. The more context you need to understand a piece of code, the harder it is to understand."

Techniques for context independence:

1. Use factories for test data
2. Inject dependencies
3. Reset state between tests
4. Avoid global state

#### 9.4 Communicating With the Future (10 pages)

- Write tests that will help future maintainers
- Focus on behavior and intent
- Document edge cases and special scenarios
- Make failure messages meaningful

> "Code is read far more often than it is written. Optimize for reading."

Best practices for future-proof tests:

- Write tests that act as documentation
- Explain the "why" not just the "what"
- Make edge cases explicit
- Use clear, intention-revealing names

Key testing lessons:

1. Tests are more than just verification
2. They serve as documentation
3. They enable safe refactoring
4. They specify behavior

> "The measure of good tests is how well they serve future maintainers."
