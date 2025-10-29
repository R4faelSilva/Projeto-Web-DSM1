let livros = [];

// Carrega o JSON com os livros
fetch('data.json')
    .then(response => response.json())
    .then(data => {
    livros = data;
    mostrarLivros(livros);
    })
    .catch(error => console.error('Erro ao carregar JSON:', error));

// Mostra os livros na tabela
function mostrarLivros(lista) {
    const tbody = document.querySelector('#tabela-livros tbody');
    tbody.innerHTML = '';

    lista.forEach(livro => {
    const linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${livro.id}</td>
        <td>${livro.titulo}</td>
        <td>${livro.autor}</td>
    `;
    tbody.appendChild(linha);
    });
}

// Filtro de busca
function filtrarLivros() {
    const termo = document.querySelector('#busca').value.toLowerCase();
    const filtrados = livros.filter(livro =>
    livro.titulo.toLowerCase().includes(termo) ||
    livro.autor.toLowerCase().includes(termo)
    );
    mostrarLivros(filtrados);
}