document.addEventListener('DOMContentLoaded', function () {
  // Carregamento dinâmico da imagem do usuário
  fetch('https://api.example.com/user/image')
    .then((response) => response.json())
    .then((data) => {
      const imgUser = document.querySelector('.img-user img');
      imgUser.src = data.imageUrl;
      imgUser.alt = data.userName;
    })
    .catch((error) => {
      console.error('Erro ao obter imagem do usuário:', error);
    });

  // Animação de carregamento inicial com ícone
  const loadingText = document.getElementById('loading-text');
  const loading = document.getElementById('loading');

  let progress = 0;
  const interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loading.style.display = 'none';
      }, 500);
    } else {
      progress++;
      loadingText.innerText = `${progress}%`;
    }
  }, 10);

  // Abrir links das redes sociais em novas abas
  const socialLinks = document.querySelectorAll('.box-social');

  socialLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const url = this.href;
      window.open(url, '_blank');
    });
  });

  // Manipulação do formulário de contato
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    // Validar se todos os campos estão preenchidos
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Enviar dados do formulário
    fetch('https://formspree.io/f/xblrdolo', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Mensagem enviada com sucesso:', data);
        alert('Mensagem enviada com sucesso!');
        contactForm.reset(); // Limpar o formulário após o envio
      })
      .catch((error) => {
        console.error('Erro ao enviar mensagem:', error);
        alert(
          'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.',
        );
      });
  });
});
