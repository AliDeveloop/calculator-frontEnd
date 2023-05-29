document.addEventListener('DOMContentLoaded', function() {
    var resultInput = document.getElementById('result');
    var buttons = document.querySelectorAll('button');
    var clearButton = document.getElementById('clear');
    var equalButton = document.getElementById('equal');
  
    // Attach click event listeners to all buttons
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        var buttonValue = button.value;
  
        if (buttonValue === '=') {
          try {
            var result = eval(resultInput.value);
            resultInput.value = result;
          } catch (error) {
            resultInput.value = 'خطا';
          }
        } else if (buttonValue === 'C') {
          resultInput.value = '';
        } else {
          resultInput.value += buttonValue;
        }
      });
    });
  });
  