
function harsh(value) {
    document.getElementById('display').value += value;
 }
 
 
 function harsh1() {
    document.getElementById('display').value = '';
 }

 function calculateResult() {
     const display = document.getElementById('display');
     try {
 
         display.value = eval(display.value);
     } catch (error) {
         
         display.value = 'Error';
     }
 }