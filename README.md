# tscoin2022
Practicing typescript applying blockchain concept.


## Why Typescript?

* Because of type safety.
* Reduces chance of bugs occur compared to normal javascript.
* Minize runtime errors.
* Saves a lot of time related to bugs or errors.
* Helps detecting codes that could not be excecuted or may have potential errors before running the code.
* Reduces chances of fixing code.

## How Typescript Work?
* Checks the code before actually running the code.
* TS -- (Compilation) -- JS
* If there are any errors in Typescript file, the file will not be compiled to JS file.
* Checks type using 'type inference'.

## How to set types?
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

## Optional Types

> ?
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
