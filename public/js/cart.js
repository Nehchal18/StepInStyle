const currentUsername = localStorage.getItem("currentUser");

if (!currentUsername) {
    window.location.href = 'login.html';
}