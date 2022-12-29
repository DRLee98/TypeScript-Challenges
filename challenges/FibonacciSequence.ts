/*
  4182 - Fibonacci Sequence
  -------
  by windliang (@wind-liang) #medium 
  
  ### Question
  
  Implement a generic `Fibonacci<T>` that takes a number `T` and returns its corresponding [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).
  
  The sequence starts:
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
  
  For example
  ```ts
  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21
  ```
  
  > View on GitHub: https://tsch.js.org/4182
*/

/* _____________ Your Code Here _____________ */

type MakeArray<N, A extends any[] = []> = A["length"] extends N
  ? A
  : MakeArray<N, [...A, ""]>;
type Plus<A, B> = [...MakeArray<A>, ...MakeArray<B>]["length"];
type Fibonacci<T extends number, R extends any[] = [1]> = T extends R["length"]
  ? R extends [...infer _, infer Result]
    ? Result
    : never
  : R extends [...infer _, infer A, infer B]
  ? Fibonacci<T, [...R, Plus<A, B>]>
  : Fibonacci<T, [1, 1]>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
  Expect<Equal<Fibonacci<16>, 987>>,
  Expect<Equal<Fibonacci<17>, 1597>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4182/answer
  > View solutions: https://tsch.js.org/4182/solutions
  > More Challenges: https://tsch.js.org
*/
