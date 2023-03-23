/*
  9155 - ValidDate
  -------
  by ch3cknull (@ch3cknull) #hard

  ### Question

  Implement a type `ValidDate`, which takes an input type T and returns whether T is a valid date.

  **Leap year is not considered**

  Good Luck!

  ```ts
  ValidDate<'0102'> // true
  ValidDate<'0131'> // true
  ValidDate<'1231'> // true
  ValidDate<'0229'> // false
  ValidDate<'0100'> // false
  ValidDate<'0132'> // false
  ValidDate<'1301'> // false
  ```

  > View on GitHub: https://tsch.js.org/9155
*/

/* _____________ Your Code Here _____________ */

type Month =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12";
type DaysOfFeb =
  | Month
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24"
  | "25"
  | "26"
  | "27"
  | "28";
type DaysOfSM = DaysOfFeb | "29" | "30";
type DaysOfBM = DaysOfSM | "31";

type MonthDays = {
  "01": DaysOfBM;
  "02": DaysOfFeb;
  "03": DaysOfBM;
  "04": DaysOfSM;
  "05": DaysOfBM;
  "06": DaysOfSM;
  "07": DaysOfBM;
  "08": DaysOfBM;
  "09": DaysOfSM;
  "10": DaysOfBM;
  "11": DaysOfSM;
  "12": DaysOfBM;
};

type ValidDate<T extends string> = T extends `${Month}${infer S}`
  ? T extends `${infer M extends keyof MonthDays}${S}`
    ? S extends MonthDays[M]
      ? true
      : false
    : false
  : false;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<ValidDate<"0102">, true>>,
  Expect<Equal<ValidDate<"0131">, true>>,
  Expect<Equal<ValidDate<"1231">, true>>,
  Expect<Equal<ValidDate<"0229">, false>>,
  Expect<Equal<ValidDate<"0100">, false>>,
  Expect<Equal<ValidDate<"0132">, false>>,
  Expect<Equal<ValidDate<"1301">, false>>,
  Expect<Equal<ValidDate<"0123">, true>>,
  Expect<Equal<ValidDate<"01234">, false>>,
  Expect<Equal<ValidDate<"">, false>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9155/answer
  > View solutions: https://tsch.js.org/9155/solutions
  > More Challenges: https://tsch.js.org
*/
