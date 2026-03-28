// Função para alternar entre dark e light mode
function trocarTema() {
    const body = document.body;
    const btn = document.getElementById('tema-trocar');
    body.classList.toggle('light-mode');
    // Salva preferência no localStorage
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        btn.innerHTML = '🌙'; // Lua para modo claro
    } else {
        localStorage.setItem('theme', 'dark');
        btn.innerHTML = '☀️'; // Sol para modo escuro
    }
}

// Aplica o tema salvo ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const btn = document.getElementById('tema-trocar');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if (btn) btn.innerHTML = '🌙';
    } else {
        if (btn) btn.innerHTML = '☀️';
    }
});


document.addEventListener('DOMContentLoaded', () => {
	const perfilLinks = document.querySelectorAll('.perfil');

	perfilLinks.forEach(link => {
		link.addEventListener('click', (event) => {
			// Encontrar o elemento de nome e a imagem dentro do perfil clicado
			const item = link.closest('.item-perfil');
			if (!item) return;

			const nomeEl = item.querySelector('.nome-perfil');
			const imgEl = item.querySelector('img');

			const nome = nomeEl ? nomeEl.textContent.trim() : '';
			let imgSrc = imgEl ? imgEl.getAttribute('src') : '';

			// Ajusta caminho relativo para que funcione a partir de catalogo/catalogo.html
			// Se for um caminho relativo como "assets/1.webp", prefixa "/perfil/" para apontar ao root
			if (imgSrc && !imgSrc.startsWith('http') && !imgSrc.startsWith('/') && !imgSrc.startsWith('/perfil/')) {
				imgSrc = '/perfil/' + imgSrc;
			}

			try {
				localStorage.setItem('perfilAtivoNome', nome);
				localStorage.setItem('perfilAtivoImagem', imgSrc);
			} catch (e) {
				// Silenciar erros de localStorage (ex: modo privado)
				console.warn('Não foi possível salvar o perfil ativo no localStorage', e);
			}

			// Deixar o link navegar normalmente para catalogo.html
		});
	});
});


