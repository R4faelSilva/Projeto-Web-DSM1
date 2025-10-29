fetch('./json/livros.json')
    .then(res => res.json())
    .then(livros => {
        const tbody = document.querySelector('tbody');
        livros.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.titulo}</td>
                <td>${item.id}</td>
                <td>${item.autor}</td>
            `;
            tbody.appendChild(tr);
        });
    })
    .catch(error => console.error('Erro ao carregar JSON', error));
