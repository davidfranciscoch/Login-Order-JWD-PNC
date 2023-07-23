const btn = document.getElementById('login');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'pass') {
        alert('Log In Berhasil');
        window.location.href = '../Order/home.html';
    } else {
        alert('Username atau Password Salah');
    }
});
