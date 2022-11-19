function sum (a: number, b: number): string {
    return (a + b).toString()
}

let addition: (a: number, b: number) => string = sum  

let s: string = "Result, " + addition(13,2)

// console.log(s);


function proces() {
    console.log('Start process: Download The Neighbourhood - Sweater Weather.mp3');
    console.log('1%');
    console.log('11%');
    console.log('12%');
    console.log('13%');
    return 'result'
    console.log('15%');
    console.log('16%');
    return
}

let res: string | undefined = proces()
 
if (typeof res == "string") {
    console.log(res[0]);
}
else {
    console.log(res);
    
}