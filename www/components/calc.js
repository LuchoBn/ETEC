let result = document.getElementById('result');
let currentInput = '';
function appendNumber(number)
 {  currentInput += number;
   result.value = currentInput;}
function appendOperator(operator) 
{  if (currentInput !== '')
 {    currentInput += ` ${operator} `;
     result.value = currentInput;  }}
function 
clearResult() 
{  currentInput = '';
  result.value = '';}
function calculate()
 {  try
  {    currentInput = eval(currentInput.replace(/x/g, '*')); // Reemplaza 'x' por '*' para la multiplicación 
result.value = currentInput; 
 }
 catch (error) {    result.value = 'Error';    currentInput = '';  }}