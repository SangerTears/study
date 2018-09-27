
// enum Color {red, Green, Blue}
// let c: Color = Color.Green

// enum Color { Red = 1, Green=2, Blue }
// let c: Color = Color.Green;

// let notSure:any = 4;
let list: any[] = [1, true, "free"];

list[1] = 100;
let notSure: any = 4;
// let prettySure: object = 4;
function warUser(): void{
    alert("This is my warning message");
}
let unusable: void = undefined;
// void只能赋予underfined和null
let u: undefined =undefined
let n: null = null;

function error(message: string) : never {
    throw new Error(message)
}
// 推断返回值类型为never
function fail() {
    return error("Something failed");
}
function infiniteLoop(): never{
    while (true) {
        
    }
}