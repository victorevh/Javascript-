/*  
   Type conversion (typecasting) vs Type coersion

   * Alteração de um tipo de dado para outro tipo

*/

// console.log('9' + 5) nesse exemplo de concatenação o JS forçou uma Type coersion, pois observe que tempos dois tipos de dados, uma string e um number.

// observe no exemplo abaio que eu declarei que 9 não era uma string e sim um Number, sendo assim fiz uma Type conversion e a soma foi executada normalmente
console.log(Number('9') + 5)