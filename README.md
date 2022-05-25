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
```

> Explicit Types
```
  let isFat : boolean = false
            |---TS---|

  Specifically writing a type to the variable.
```