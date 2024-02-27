//Standart Console Log
console.log('123');

//Monkey-Patched Console Log
const originalConsoleLog = console.log; //create a copy

console.log = (...arg) => {
    originalConsoleLog(...arg); //invokes the original copy

    //any other logic

    console.warn('Notify Angular for that this method happen')
};

console.log('345');