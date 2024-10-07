// Array untuk menyimpan buku
let books = [
    { title: 'Matematika untuk SMP', author: 'Dr. Andi Mulyono' },
    { title: 'Fisika Dasar', author: 'Prof. Suparman' }
];

// Fungsi untuk menampilkan buku
function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Kosongkan dulu daftar

    // Looping untuk menambahkan buku ke dalam daftar
    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = `${book.title} oleh ${book.author}`;
        
        // Tambahkan tombol hapus untuk setiap buku
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.onclick = function() {
            deleteBook(index);
        };
        
        li.appendChild(deleteButton);
        bookList.appendChild(li);
    });
}

// Fungsi untuk menambah buku baru
function addBook(event) {
    event.preventDefault(); // Mencegah reload halaman
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;

    // Tambahkan buku ke array
    books.push({ title, author });

    // Update daftar buku
    displayBooks();

    // Reset form
    document.getElementById('addBookForm').reset();
}

// Fungsi untuk menghapus buku
function deleteBook(index) {
    books.splice(index, 1); // Hapus buku berdasarkan index
    displayBooks(); // Update tampilan buku
}

// Event listener untuk form tambah buku
document.getElementById('addBookForm').addEventListener('submit', addBook);

// Panggil fungsi untuk menampilkan buku saat halaman dimuat
displayBooks();
