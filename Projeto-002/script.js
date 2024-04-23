// função para pegar os valores dos campos

var formulario = document.getElementById('formulario');
var nome = document.getElementById('nome');
var telefone = document.getElementById('telefone');

formulario.addEventListener('submit', function (e) {
    console.log(nome.value);
    console.log(telefone.value);

    // impede o envio do form
    e.preventDefault();
});

/* lógica de programação 

- pegar valores que estão nos campos - ok
- exibir variaveis dentro da tabela html
- para cada item, adicionar na tabela (ou seja, precisa ser um objeto)

*/
