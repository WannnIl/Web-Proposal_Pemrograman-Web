// Daftar buku (books array)
const books = [
    { title: 'Matematika untuk SMP', author: 'Dr. Andi Mulyono' },
    { title: 'Fisika Dasar', author: 'Prof. Suparman' },
    { title: 'Kimia Organik', author: 'Dr. Rizal Manurung' },
    { title: 'Biologi Umum', author: 'Prof. Budi Santoso' }
];

// Fungsi untuk menampilkan daftar buku
function displayBooks(filteredBooks = books) {
    const bookList = document.getElementById('book-list');
    const borrowBookSelect = document.getElementById('borrowBook');
    
    // Kosongkan isi daftar sebelum diisi ulang
    bookList.innerHTML = ''; 
    borrowBookSelect.innerHTML = '';

    // Looping untuk menambahkan buku ke daftar
    filteredBooks.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} oleh ${book.author}`;
        bookList.appendChild(li);

        const option = document.createElement('option');
        option.value = book.title;
        option.textContent = book.title;
        borrowBookSelect.appendChild(option);
    });

    // Jika tidak ada buku yang ditemukan, tampilkan pesan
    if (filteredBooks.length === 0) {
        bookList.innerHTML = '<li>Tidak ada buku yang ditemukan</li>';
    }
}

// Fungsi pencarian buku
function searchBook() {
    const query = document.getElementById('searchBook').value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
    );
    displayBooks(filteredBooks); // Tampilkan hasil pencarian
}

// Panggil fungsi untuk menampilkan semua buku saat halaman dimuat
window.onload = function() {
    displayBooks(); // Pastikan buku ditampilkan saat halaman dimuat
};

// Event listener untuk tombol pencarian
document.getElementById('searchButton').addEventListener('click', function (e) {
    e.preventDefault(); // Mencegah reload halaman
    searchBook();
});
