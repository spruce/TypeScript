/// <reference path='fourslash.ts' />

////interface I {
////    [|property1|]: number;
////    property2: string;
////}
////var elems: I[];
////
////var p2: number, [|property1|]: number;
////for ({ [|property1|] } = elems[0]; p2 < 100; p2++) {
////   p2 = [|property1|]++;
////}
////for ({ [|property1|]: p2 } = elems[0]; p2 < 100; p2++) {
////}

const ranges = test.ranges();
const [r0, r1, r2, r3, r4] = ranges;
verify.renameLocations([r0, r4], [r0, r2, r4]);
verify.renameLocations([r1, r3], [r1, r2, r3]);
verify.renameLocations(r2, ranges);
