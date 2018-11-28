const multiply = (num: number): number => {
    return num * num;
}

const num: number = +process.argv[2];
console.log(multiply(num));

