let resultElement = document.getElementById('result');
        let currentExpression = '';
    
        function display(number) {
          currentExpression += number;
          resultElement.value = currentExpression;
        }
    
        
    
        function reset() {
          console.log("RS");
          currentExpression = '';
          resultElement.value = '';
         
        }
        function del(){
            resultElement.value = resultElement.value.slice(0,-1);
        }
    
        function calculate() {
          try {
            const result = eval(currentExpression);
            resultElement.value = result;
            currentExpression = '';
          } catch (error) {
            resultElement.value = 'Error';
          }
        }
