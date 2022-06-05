# tscoin2022
Practicing typescript applying blockchain concept.


## Why Typescript? ✔️

* Because of type safety.
* Reduces chance of bugs occur compared to normal javascript.
* Minize runtime errors.
* Saves a lot of time related to bugs or errors.
* Helps detecting codes that could not be excecuted or may have potential errors before running the code.
* Reduces chances of fixing code.

## How Typescript Work? ✔️
* Checks the code before actually running the code.
* TS -- (Compilation) -- JS
* If there are any errors in Typescript file, the file will not be compiled to JS file.
* Checks type using 'type inference'.

## How to set types? ✔️
> Implicit Types
```
  let food = "Sushi"

  Let Typescript to infer the type of the variable 'food'.
  Useful for minimizing file size, keystrokes, and time for writing & reading the code
```

> Explicit Types
```
  let isFat : boolean = false
            |---TS---|

  let population : number[] = [1,2]
                |----TS----|

  Specifically writing a type to the variable.
  Useful when Typescript cannnot infer the type of the variables.
```

## Optional Types ✔️

> ?

Not mandatory or required.

Optional
```
  const life : {
    time: number,
    life?: string  // <== ★★★
  } = { ... }

  variable + ? 
  ↑ Make Typescript to accept null / undefined for this variable.
```

> Alias / type 

  A blue print for defining types for variables.<br>
  Helps reducing repetitive code.
```
    type Person {
      time: number,
      life?: string 
    }

    const life : Person = { ... }

                                  |--return type--|
    function makePerson(name: String) : Person {
      return {
        name
      }
    }

                                  |--return type--|
    const makePerson = (name: String) : Player => ({name})
```

> Readonly

Typescript aborts compilation when readonly variable's value is being changed.

```
  const life : {
    readonly time: number
  } = { ... }

  const number : readonly numbers[] = [1,2,3]
```

> Tuple

An array with minimum amount of elements with specific types in order.

```
  const chaos : [boolean, string, number] = [false, "Udon", 9]
```

> any

For escaping type check.

```
  const fruit = {
    name: any
  }
```

> unknown

Keyword for when the data type is not known.<br>
(E.g. Getting some data from API's);

```
  let receivedData : unknown;

  if (typeof receivedData === 'string') {
    receivedData.charAt(0);
  }

  if (typeof receivedData === 'number') {
    receivedData.isNaN;
  }
```

> void

For functions that do not return anything, very similar to Java.

```
  const toEmpty = () => {
    console.log("Hi, mom")
  }
```

> never

A type that should or could never happen, excecute, run.<br>
A type that cannot return return anything.

```
  const toLive = (health : string | number) => {
    if (typeof health === 'string') {
      health  // This will be string type.
    } else if (typeof health === 'number') {
      health  // This will be number type.
    } else {
      health  // This will be never type.
    }
  }
```

## Constraining types ✔️

```
type Protocol = "HTTP" | "HTTPS" | "TCP"

const specificRule : Protocol = "IP" // typescript error occurs.
const anotherRule : Protocol = "TCP" // no typescript error.
```

## Call Signatures ✔️

Information of what type should the paremeters and return of a function should be.<br>
You can see the information by hover the cursor on top of the name of the function.

```
const add = (a: number, b:number) => a + b

// Call Signature
const add: (a: number, b:number) => number

type Add = (a: number, b:number) => number

const add : Add = (a: number, b:number) => a + b
```

Before writing a function, think about the types the function may use or need.

## Overloading ✔️

Adding multiple & different call signatures in an existing signature, similar to overloading in Java.

```
// Two ways of making call signatures.
// 1.
  type Add = (a: number, b:number) => number

// 2.
  type Add = {
    (a: number, b:number) : number
  }

No.2 is for overloading.

  type Add = {
    (a: number, b:number) : number
    (a: number, b:string) : number
  }
```

## Polymorphism ✔️

'Many differnt forms or structures'

Can accept any types dynamically by inferring the parameters.

```
  type showArray = {
    (arr: number[]) : void
    (arr: string[]) : void
    (arr: boolean[]) : void
    ...
  }

  ↓↓

  type showArray = {
    <T>(arr: T[]) : void
    ...
  }

  type delArray = {
    <T>(arr: T[]) : T  // 'T' is generic type.
    ...
  }
```

## Class ✔️

> abstract class

A class that cannot not be used for creating instances, but can be extended to other class.<br>
A blueprint of a class.

> absctract method

A method that is not implemented, but has call signature.<br>
*Abstract: Making the function inferrable while hiding the detail of logics.

> private

Accessible only inside the class where the variable / methods was first created.

> public

Accessible outside of the class, and via instances.

> protected

Accessible within sub-class, but not instances.

> etc

Class can be used as type.

```
// To write a type that has multiple keys.
 [key: string] : string
 ...
 [key: number] : string
```

## Interface ✔️

For explaining the shape of the object to Typescript<br>
Similar to type.

Interface is used for defining types for objects, not constraining values.

```
Interface:

Constrain/attach/define only the types to variables in an object.


Type:

Constrain/attach/define not only the types but also values to variables in an object.
```

```
type Fruit = {
  name: "Durian";
}

interface Fruit {
  name: string;
}

---

type Fruit = Vegie & {}

interface Fruit extends Vegie {}

---

interface Human {}
interface Nation {}

class American extends Human, Nation {}
```

## Installing

1. npm init -y
2. Erase or modify key-value that has 'index.js'
3. npm i -D typescript
4. touch tsconfig.json (or create manually)

```
tsconfig.json

Tells VSCode that the project is using Typescript, and this will enable autocompletions related to typescript.


"lib" property

Tell typescript what kind of api should it be monitor and auto-complete.
```

## Declaration Files

The files that has '*.d.ts' extension.

They let the typescript know the types of variables or functions that is not included in default libraries.

```
// newLibrary.d.ts

declare module "newLibrary" { // "newLibrary" is the name of JS file library.
  function hi(greeting: string) : string;
}

// newLibary.js

export function hi(greeting) {
  return `Hello there, ${greeting}`
}
```

## @ts-check

An annotation telling typescript to check JS file for types.

Useful for transforming old JS file to typescript without changing the code.

```
// @ts-check

...JS CODE...

```

## JS-DOC

Writing specification of logics or functions using comments, which does not affect the original JS file.

No types need to be written in the original JS file.

```
/**
 * @param {string} greeting
 * @returns {string}
 ...
 */
  export function hi(greeting) {
    return greeting
  }
```

