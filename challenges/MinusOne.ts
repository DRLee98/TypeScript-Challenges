/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #medium #math
  
  ### Question
  
  Given a number (always positive) as a type. Your type should return the number decreased by one.
  
  For example:
  
  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```
  
  > View on GitHub: https://tsch.js.org/2257
*/

/* _____________ Your Code Here _____________ */

type MinusOne<Num extends number> = GetFilledArray<`${Num}`> extends [
  number,
  ...infer Other
]
  ? Other["length"]
  : 0;

type GetFilledArray<
  Str extends string,
  Data extends 1[] = []
> = Str extends `${infer First extends keyof Dictionary}${infer Other}`
  ? GetFilledArray<
      Other,
      [...CopyDictionaryTenTimes<Data>, ...Dictionary[First]]
    >
  : Data;

type CopyDictionaryTenTimes<Arr extends 1[]> = [
  ...Arr,
  ...Arr,
  ...Arr,
  ...Arr,
  ...Arr,
  ...Arr,
  ...Arr,
  ...Arr,
  ...Arr,
  ...Arr
];

type Dictionary = {
  "0": [];
  "1": [1];
  "2": [1, 1];
  "3": [1, 1, 1];
  "4": [1, 1, 1, 1];
  "5": [1, 1, 1, 1, 1];
  "6": [1, 1, 1, 1, 1, 1];
  "7": [1, 1, 1, 1, 1, 1, 1];
  "8": [1, 1, 1, 1, 1, 1, 1, 1];
  "9": [1, 1, 1, 1, 1, 1, 1, 1, 1];
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2257/answer
  > View solutions: https://tsch.js.org/2257/solutions
  > More Challenges: https://tsch.js.org
*/
