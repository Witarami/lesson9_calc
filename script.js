let lastOperand = 0;
let secondOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');
const secondWindow = document.getElementById('secondWindow');

document.getElementById('btn_ngtv').addEventListener('click', function () {
    operation = 'ngtv';
    if (operation === 'ngtv'){
        const result = '-' + parseFloat(inputWindow.value);
        inputWindow.value = result;
    }
})

document.getElementById('btn_1').addEventListener('click', function () {
    if (inputWindow.value === '0'){
        const result = 0+1;
        inputWindow.value = result;
    } else {
        inputWindow.value += '1';
    }
})

document.getElementById('btn_2').addEventListener('click', function () {
    if (inputWindow.value === '0'){
        const result = 0+2;
        inputWindow.value = result;
    } else {
        inputWindow.value += '2';
    }
})

document.getElementById('btn_3').addEventListener('click', function () {
    if (inputWindow.value === '0'){
        const result = 0+3;
        inputWindow.value = result;
    } else {
        inputWindow.value += '3';
    }
})

document.getElementById('btn_4').addEventListener('click', function () {
    if (inputWindow.value === '0'){
        const result = 0+4;
        inputWindow.value = result;
    } else {
        inputWindow.value += '4';
    }
})

document.getElementById('btn_5').addEventListener('click', function () {
    if (inputWindow.value === '0'){
        const result = 0+5;
        inputWindow.value = result;
    } else {
        inputWindow.value += '5';
    }
})

document.getElementById('btn_6').addEventListener('click', function () {
    if (inputWindow.value === '0'){
        const result = 0+6;
        inputWindow.value = result;
    } else {
        inputWindow.value += '6';
    }
})

document.getElementById('btn_7').addEventListener('click', function () {
    if (inputWindow.value === '0'){
        const result = 0+7;
        inputWindow.value = result;
    } else {
        inputWindow.value += '7';
    }

})

document.getElementById('btn_8').addEventListener('click', function () {
    if (inputWindow.value === '0'){
        const result = 0+8;
        inputWindow.value = result;
        secondOperand = result;

    } else {
        secondOperand = inputWindow.value += '8';
    }
})

document.getElementById('btn_9').addEventListener('click', function () {
    if (inputWindow.value === '0'){
        const result = 0 + 9;
        inputWindow.value = result;
        secondOperand = result;
    }    
    else {
        inputWindow.value += '9';
        secondOperand += '9'; 
    }
    
})

document.getElementById('btn_0').addEventListener('click', function () {
    if (inputWindow.value === '0'){
        const result = 0+0;
        inputWindow.value = result;
    } else {
        inputWindow.value += '0';
    }
})

document.getElementById('btn_rdc').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'rdc';
    if (operation === 'rdc'){
        const result = lastOperand ** 0.5;
        operation = null;
        lastOperand = 0;
        inputWindow.value = result.toPrecision(9);
    }
})

document.getElementById('btn_dvsn').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'dvsn';
    inputWindow.value = '';
})

document.getElementById('btn_mltpl').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'mltpl';
    inputWindow.value = '';
})

document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
})

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    inputWindow.value = inputWindow.value + '+';
    secondOperand = 0;
})

document.getElementById('btn_com').addEventListener('click', function () {
    inputWindow.value += '.';
})
    
document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation === 'dvsn'){
        const result = lastOperand / parseFloat(inputWindow.value);
        operation = null; 
        lastOperand = 0;
        inputWindow.value = result.toPrecision(9);
    }
    if (operation === 'mltpl'){
        const result = lastOperand * parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result.toPrecision(9);
    }
    if (operation === 'def'){
        const result = lastOperand - parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result.toPrecision(9);
    }   
    if (operation === 'sum'){
        const result = lastOperand + parseFloat(secondOperand);
        operation = null;
        lastOperand = 0;
        secondOperand = 0;
        inputWindow.value = inputWindow.value + '=' + result.toPrecision(9);
    }    
})

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
})
