// Homework06/types.ts

// Протипизируем данные

// age: число
let age: number = 25;  

// name: строка
let name: string = "Alice";

// isActive: булево значение
let isActive: boolean = true;

// nullableValue: строка или null
let nullableValue: string | null = null; 

// numbers: массив чисел
let numbers: number[] = [1, 2, 3, 4]; 

// names: массив строк
let names: string[] = ["Alice", "Bob", "Charlie"];

// mixed: массив с числами и строками
let mixed: (number | string)[] = [1, "Alice", 2, "Bob"];

// colors: массив с разными типами (число, строка, булево значение)
let colors: (number | string | boolean)[] = [123, "red", true, "blue"];

// Функция add: принимает два числа и возвращает число
const add = (a: number, b: number): number => {
  return a - b;
};

// Функция logMessage: принимает строку и ничего не возвращает (void)
const logMessage = (message: string): void => {
  console.log(message);
};
