function sum (a: number, b: number): string {
    return (a + b).toString()
}

let addition: (a: number, b: number) => string = sum  

let s: string = "Result, " + addition(13,2)

console.log(s);
