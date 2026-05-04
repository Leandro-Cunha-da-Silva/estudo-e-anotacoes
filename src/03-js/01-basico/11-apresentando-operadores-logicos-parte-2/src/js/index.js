// E (&&)
const a = 2
const b = 2

console.log (a === b && a <= b)
// V e V = V

console.log (a === b && a < b)
// V e F = F

console.log (a > b && a === b)
// F e V = F

console.log (a > b && a < b)
// F e F = F



/* OR */

console.log (a === b || a <= b)
// V ou V = V

console.log (a === b || a < b)
// V ou F = V

console.log (a > b || a === b)
// F ou V = V

console.log (a > b || a < b)
// F ou F = F


/* NOT */

console.log (!(a === b)) //false

console.log (!(a < b)) //true


