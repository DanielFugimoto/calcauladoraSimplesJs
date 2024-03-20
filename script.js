let display = document.getElementById('display');   //Esta linha declara uma variável chamada display e a inicializa com o elemento DOM que possui o ID 'display'. Geralmente, esse tipo de elemento é uma caixa de texto ou campo de entrada onde a expressão da calculadora será exibida.
let expression = '';    //Esta linha declara uma variável chamada expression e a inicializa como uma string vazia. Esta variável será usada para armazenar a expressão da calculadora.

function appendToDisplay(value) { //Esta linha declara uma função chamada appendToDisplay que recebe um parâmetro value. Esta função é responsável por adicionar o valor especificado à expressão da calculadora.
    expression += value;    // Esta linha adiciona o valor passado como argumento à variável expression. Isso é feito usando o operador +=, que é uma forma abreviada de concatenar strings.
    display.value = expression; //Esta linha define o valor do elemento display para ser igual à variável expression. Isso atualiza o conteúdo exibido na calculadora.
}

function clearDisplay() {   // Esta linha declara uma função chamada clearDisplay, que será responsável por limpar o conteúdo da calculadora.
    expression = '';        // Esta linha redefine a variável expression para uma string vazia, limpando assim o conteúdo da calculadora.
    display.value = '';     //  Esta linha define o valor do elemento display como uma string vazia, removendo assim qualquer conteúdo visível na calculadora.
}

function calculateResult() {            // Esta linha declara uma função chamada calculateResult, que será responsável por calcular o resultado da expressão da calculadora.
    try {                               // Esta linha inicia um bloco try que é usado para testar um bloco de código em busca de erros.
        expression = eval(expression);  //  Esta linha avalia a expressão contida na variável expression usando a função eval() do JavaScript, que interpreta a string como código JavaScript. O resultado da expressão é armazenado novamente na variável expression.
        display.value = expression;     // Esta linha define o valor do elemento display para ser igual ao resultado da expressão. Isso atualiza o conteúdo exibido na calculadora com o resultado do cálculo.
    } catch (error) {                   //  Esta linha inicia um bloco catch, que é executado se ocorrer um erro dentro do bloco try.
        display.value = 'Erro';         // Esta linha define o valor do elemento display como 'Erro' caso ocorra um erro durante o cálculo da expressão. Isso informa ao usuário que ocorreu um erro durante a operação da calculadora.
    }
}

function clearLast() {
    if (expression.length > 0) {
        expression = expression.slice(0, -1); // Remove o último caractere da expressão
        display.value = expression; // Atualiza o display com a expressão atualizada
    }
}
