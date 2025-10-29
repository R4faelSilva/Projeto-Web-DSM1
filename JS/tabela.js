const caminhoJSON = '../JSON/tabela.json' // define uma variável constante ao caminho do JSON

fetch(caminhoJSON) // acessa o JSON pelo caminho e retorna uma resposta
    .then(resposta => resposta.json()) // (then = então) ele pega a resposta do aceso e transforma para um arquivo que o JS consegue entender (pega o texto e transforma em objeto)
    .then(dados => inserirTabela(dados)) // pega o objeto convertio do then de cima e coloca na variável dados e passa para a função inserirTabela
    .catch(erro => console.error('Erro ao carregar JSON:', erro)); // pega algum erro q der e msotra no console um texto

function inserirTabela(dados) { // aqui começa a função de inserir na tabela
    const corpoTabela = document.querySelector('#tabela2 tbody'); // aqui guarda o resultado da busca do query dentro de uma variável (ou seja ele seleciona q nem no CSS nessa variável ele vai ta guardando dos elementos do #tabela1 e tbody)
    corpoTabela.innerHTML = ''; // aqui está limpando as informações q tem naqueles elemento deixando ele vazio com o = ''
    dados.forEach(valorTabela => { // aqui ele começa a adicionar as linhas e as informações de cada linha (for each = para cada)
        const linha = document.createElement('tr'); // cria a linha com o elemento tr
        // ao envés de limpar ele adiciona na linha criada as inforções do JSON na ordem escrita a baixo
        linha.innerHTML = `
            <td>${valorTabela.elemento}</td>
            <td>${valorTabela.funcao}</td>
            <td>${valorTabela.necessario}</td>
            <td>${valorTabela.compatibilidade}</td>
            <td>${valorTabela.observacao}</td>
        `; 
        corpoTabela.appendChild(linha); // adiciona essas linhas como filhos do tbody
    });

}