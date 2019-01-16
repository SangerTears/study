//函数,有返回值的函数,没有返回值的函数
function factorial(number) {
    var product = 1;
    for (let i = number; i>=1; --i) {
        product *= i;
    }
    return product;
}
print(factorial(4));
print(factorial(5));
print(factorial(6));

// 没有返回值的函数,使用该函数并不是为了得到他的返回值,而是为了执行函数中定义的操作
function curve(arr, amount) {
    for (let i = 0; i < array.length; i++) {
        arr[i] += amount;
    }
    var grades = [77,73,74,81,90];
    curve(grades, 5);
    print(grades)
}
// 变量的作用域
