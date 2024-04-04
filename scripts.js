document.addEventListener("DOMContentLoaded", function() {
    const bookList = document.getElementById('book-list');

    // Petición AJAX para obtener los datos
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'get_books.php', true);
    xhr.onload = function() {
        if (this.status === 200) {
            const books = JSON.parse(this.responseText);
            books.forEach(function(book) {
                const div = document.createElement('div');
                div.className = 'book';
                div.innerHTML = `
                    <h3>${book.title}</h3>
                    <p>Autor: ${book.author}</p>
                    <p>Precio: ${book.price}</p>
                `;
                bookList.appendChild(div);
            });
        }
    }
    xhr.send();
});
