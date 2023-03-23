/*
  14188 - Run-length encoding
  -------
  by Hen Hedymdeith (@alfaproxima) #hard

  ### Question

  Given a `string` sequence of a letters f.e. `AAABCCXXXXXXY`. Return run-length encoded string `3AB2C6XY`.
  Also make a decoder for that string.

  > View on GitHub: https://tsch.js.org/14188
*/

/* _____________ Your Code Here _____________ */
type StringToNumber<S extends string> = S extends `${infer A extends number}`
  ? A
  : never;
type MinusOne<N extends number, A extends any[] = []> = [
  ...A,
  ""
]["length"] extends N
  ? A["length"]
  : MinusOne<N, [...A, ""]>;

type EncodeArrayText<A extends string[]> = A extends [
  infer V extends string,
  ...infer _
]
  ? `${A["length"] extends 1 ? "" : A["length"]}${V}`
  : "";
type DecodeText<N extends number, S extends string> = N extends 0
  ? ""
  : `${S}${DecodeText<MinusOne<N>, S>}`;

namespace RLE {
  export type Encode<
    S extends string,
    A extends any[] = []
  > = S extends `${infer F}${infer Rest}`
    ? A extends [infer V extends string, ...infer _]
      ? F extends V
        ? Encode<Rest, [...A, F]>
        : `${EncodeArrayText<A>}${Encode<Rest, [F]>}`
      : Encode<Rest, [F]>
    : A["length"] extends 0
    ? S
    : EncodeArrayText<A>;
  export type Decode<
    S extends string,
    N extends number = 0
  > = S extends `${infer F}${infer Rest}`
    ? StringToNumber<F> extends never
      ? `${DecodeText<N extends 0 ? 1 : N, F>}${Decode<Rest, 0>}`
      : Decode<Rest, StringToNumber<`${N extends 0 ? "" : N}${F}`>>
    : S;
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  // Raw string -> encoded string
  Expect<Equal<RLE.Encode<"AAABCCXXXXXXY">, "3AB2C6XY">>,

  // Encoded string -> decoded string
  Expect<Equal<RLE.Decode<"3AB2C6XY">, "AAABCCXXXXXXY">>
];

/* _____________ Further Steps _____________ */
/*
    > Share your solutions: https://tsch.js.org/14188/answer
    > View solutions: https://tsch.js.org/14188/solutions
    > More Challenges: https://tsch.js.org
  */
