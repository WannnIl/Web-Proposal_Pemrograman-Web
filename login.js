// Daftar username dan password admin (untuk simulasi)
const adminCredentials = {
    username: 'admin',
    password: '12345'
};

// Fungsi untuk login admin
function handleAdminLogin() {
    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;
    const loginResult = document.getElementById('loginResult');
    
    // Memeriksa apakah username dan password sesuai
    if (inputUsername === adminCredentials.username && inputPassword === adminCredentials.password) {
        loginResult.textContent = 'Login berhasil! Mengarahkan ke halaman admin...';
        loginResult.style.color = 'green';

        // Redirect ke halaman admin setelah login berhasil
        setTimeout(() => {
            window.location.href = 'admin.html'; // Mengarahkan ke halaman admin
        }, 1000);
    } else {
        loginResult.textContent = 'Username atau password salah.';
        loginResult.style.color = 'red';
    }
}

// Event listener untuk form login admin
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah reload halaman
    handleAdminLogin(); // Panggil fungsi login
});
