var first = undefined;
var second = undefined;

var addition = false;
var substraction = false;
var multiplication = false;
var division = false;

/** Проверяю работу GIT
 * Проверка, нажат, вычитания, умножения или деления
 * @returns true ели нажата одна из кнопок
 */
function anyOperationApplyed() {
    return addition | substraction | multiplication | division;
}

/**
 * С, умножения или деления
 */
function clearOperations() {
    first = undefined;
    second = undefined;
    addition = false;
    substraction = false;
    multiplication = false;
    division = false;
}

/**
 * Нажатие на кнопку сложения
 */
function setAddition() {
    clearOperations();
    addition = true;
    first = getOutput();
}

/**
 * Нажатие на кнопку вычитания
 */
function setSubstraction() {
    clearOperations();
    substraction = true;
    first = getOutput();
}

/**
 * Нажатие на кнопку умножения
 */
function setMultiplication() {
    clearOperations();
    multiplication = true;
    first = getOutput();
}

/**
 * Нажатие на кнопку деления
 */
function setDivision() {
    clearOperations();
    division = true;
    first = getOutput();
}

/**
 * Нажатие на кномку равно, т.е. вычисление результата
 */
function countResult() {
    if (first) {
        second = getOutput();
        var result = undefined;
        if (addition) {
            result = add(first, second);
        } else if (substraction) {
            result = sub(first, second);
        } else if (multiplication) {
            result = mul(first, second)
        } else if (division) {
            result = div(first, second);
        }
        first = result;
        second = undefined;
        setOutput(result);
    }
}

/**
 * Получить число на экаране калькулятора
 * @returns Объект Number со значением
 */
function getOutput() 
{
    let text = document.getElementById("output").innerText;
    return Number(text);
}

/**
 * Установить значение на экране калькулятора
 * @param {Any} value 
 */
function setOutput(value) 
{
    document.getElementById("output").innerText = value;
    
    
}

/**
 * Нажатие на кнопку 0-9
 * @param {Number} value 
 */
function numberButtonClick(value) 
{
    if (anyOperationApplyed()) 
    {
        setOutput(0);
    }

    const out = getOutput();

    if (out.toString().length < 8) 
    {
        if (out === 0) 
        {
            setOutput(value);
        } 
        else 
        {
            setOutput(out.toString() + value.toString());
        }
    }
}

/**
 * Нажатие на кнопку вычисления квадратного корня
 */
function root() {
    setOutput(sqrt(getOutput()));
}

/**
 * Нажатие на кнопку возведения в квадрат
 */
function squared() {
    setOutput(pow(getOutput(), 2));
}

/**
 * Нажатие на кнопку смены знака числа
 */
function switchSign() {
    setOutput(-getOutput());
}

/**
 * Нажатие на кнопку получение обратного числа
 */
function reverseNumber() {
    setOutput(div(1, getOutput()));
}

/**
 * Нажатие на кнопку CE
 */
function dropAll() {
    setOutput(0);
}