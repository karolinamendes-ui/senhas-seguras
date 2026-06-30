// Função para verificar a senha
function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('errorMessage');
    const loginScreen = document.getElementById('loginScreen');
    const feedScreen = document.getElementById('feedScreen');

    // Senha secreta: 13022009
    if (input === "13022009") {
        // Esconde a tela de login e mostra o feed
        loginScreen.style.display = "none";
        feedScreen.style.display = "block";
        // Ajusta o body para o feed rolar corretamente do topo
        document.body.style.alignItems = "flex-start";
    } else {
        // Mostra mensagem de erro
        errorMsg.style.display = "block";
        // Limpa o campo de input
        document.getElementById('passwordInput').value = "";
    }
}

// Escuta a tecla "Enter" no campo de senha para fazer o login
document.getElementById('passwordInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// Função interativa que solta flores na tela
function triggerSurprise() {
    const btn = document.getElementById('interactiveBtn');
    btn.innerText = "Você é demais! 💕";
    btn.style.background = "#ff0a54";

    // Gera 10 pequenas flores/corações perto do local do botão
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-pop');
        heart.innerText = "🌸";
        
        // Distribui ligeiramente de forma aleatória na largura e altura
        heart.style.left = (window.innerWidth / 2 + (Math.random() - 0.5) * 200) + 'px';
        heart.style.top = (window.innerHeight - 100 + (Math.random() - 0.5) * 50) + 'px';
        
        document.body.appendChild(heart);

        // Remove o elemento HTML após a animação de 1 segundo terminar
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}
