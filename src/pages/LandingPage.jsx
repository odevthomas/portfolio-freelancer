import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importando Link se estiver usando React Router
import '../../styles/styles.css';

const MyLinks = () => {
  useEffect(() => {
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

    const socialLinks = document.querySelectorAll('.box-social');
    const handleSocialLinkClick = (event) => {
      event.preventDefault();
      const url = event.currentTarget.href;
      window.open(url, '_blank');
    };

    socialLinks.forEach((link) => {
      link.addEventListener('click', handleSocialLinkClick);
    });

    return () => {
      socialLinks.forEach((link) => {
        link.removeEventListener('click', handleSocialLinkClick);
      });
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Loading Screen */}
      <div
        id="loading"
        className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50"
      >
        <div id="loading-bar" className="bg-black p-4 rounded-lg shadow-lg">
          <img src="/MyLinks/block.svg" alt="Carregando" />
          <div id="loading-text">Carregando...</div>
        </div>
      </div>

      <div className="content">
        {/* User Info Widget */}
        <div className="widget widget1 mb-4 text-white shadow-lg rounded-lg flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
          <div className="info-user flex items-center space-x-4">
          <div className="img-user redondo">
  <img
    src="/perfil2.png"
    alt="user"
    className="w-full h-full object-cover" // Ajuste para preencher a área
  />
</div>
            <div className="name-user">
              <h1 className="text-2xl font-semibold">Thomas Eduardo</h1>
              <span className="text-gray-600">Desenvolvedor Web | Frontend</span>
            </div>
          </div>
        </div>

        {/* Skills Widget */}
        <div className="widget widget2 p-4 mb-4 bg-black text-white shadow-lg rounded-lg">
          <div className="hard-skills">
            <span className="destaque text-xl font-semibold block mb-2">Tecnologias</span>
            <div className="skill-icons flex flex-wrap gap-4">
              <img src="/MyLinks/skill/html.svg" alt="HTML" className="icon w-10 h-10" />
              <img src="/MyLinks/skill/css.svg" alt="CSS" className="icon w-10 h-10" />
              <img src="/MyLinks/skill/js.svg" alt="JavaScript" className="icon w-10 h-10" />
              <img src="/MyLinks/skill/react.svg" alt="React" className="icon w-10 h-10" />
              <img src="/MyLinks/skill/bootstrap.svg" alt="Bootstrap" className="icon w-10 h-10" />
              <img src="/MyLinks/skill/figma.svg" alt="Figma" className="icon w-10 h-10" />
              <img src="/MyLinks/skill/node.svg" alt="Node.js" className="icon w-10 h-10" />
              <img src="/MyLinks/skill/git.svg" alt="Git" className="icon w-10 h-10" />
              <img src="/MyLinks/skill/vite.svg" alt="Vite.js" className="icon w-10 h-10" />
              <img src="/MyLinks/skill/npm.svg" alt="NPM" className="icon w-10 h-10" />
            </div>
          </div>
        </div>

        {/* Social Media Links Widget */}
        <div className="widget redes-sociais mb-4 flex flex-wrap gap-4 justify-start md:justify-center">
          <a className="box-social instagram p-2 bg-gray-800 text-white rounded-full" href="https://www.instagram.com/thomas.fromtend/">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path fill="currentColor" d="M16 9.904a6.097 6.097 0 0 0 0 12.192a6.097 6.097 0 0 0 0-12.192m0 10.576a4.48 4.48 0 1 1 0-8.96a4.48 4.48 0 0 1 0 8.96m8.576-18.16H7.423a5.157 5.157 0 0 0-5.156 5.158V24.52c0 2.85 2.31 5.156 5.156 5.156h17.153c2.85 0 5.156-2.31 5.156-5.155V7.48c0-2.85-2.307-5.16-5.156-5.16m-2.34 3.074c0-.605.49-1.097 1.097-1.097h3.22c.604 0 1.096.49 1.096 1.097v3.22c0 .604-.49 1.096-1.098 1.096h-3.22c-.603 0-1.096-.49-1.096-1.097zm6.4 19.127c0 2.238-1.82 4.06-4.06 4.06H7.423a4.064 4.064 0 0 1-4.06-4.06V10.88h.827c.102-.5.544-.878 1.075-.878h3.438c.53 0 .974.377 1.074.877h1.498C12.517 9.732 14.175 9.03 16 9.03s3.48.7 4.723 1.847h7.912V24.52h.002z"/>
            </svg>
          </a>
          <a className="box-social github p-2 bg-gray-800 text-white rounded-full" href="https://github.com/devthmedu">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
              <path fill="currentColor" d="M8 .198a8 8 0 0 0-2.529 15.591c.4.074.547-.174.547-.385c0-.191-.008-.821-.011-1.489c-2.226.484-2.695-.944-2.695-.944c-.364-.925-.888-1.171-.888-1.171c-.726-.497.055-.486.055-.486c.803.056 1.226.824 1.226.824c.714 1.223 1.872.869 2.328.665c.072-.517.279-.87.508-1.07c-1.777-.202-3.645-.888-3.645-3.954c0-.873.313-1.587.824-2.147c-.083-.202-.357-1.015.077-2.117c0 0 .672-.215 2.201.82A7.7 7.7 0 0 1 8 4.066c.68.003 1.365.092 2.004.269c1.527-1.035 2.198-.82 2.198-.82c.435 1.102.162 1.916.079 2.117c.513.56.823 1.274.823 2.147c0 3.073-1.872 3.749-3.653 3.947c.287.248.543.735.543 1.481c0 1.07-.009 1.932-.009 2.195c0 .213.144.462.55.384A8 8 0 0 0 8.001.196z"/>
            </svg>
          </a>
          <a className="box-social linkedin p-2 bg-gray-800 text-white rounded-full" href="https://www.linkedin.com/in/thmedu/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.57 2.57 0 0 1-1.82.748a2.6 2.6 0 0 1-1.818-.747A2.55 2.55 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.58 2.58 0 0 1 4.571 2c.682 0 1.336.269 1.819.747s.753 1.126.753 1.803" clipRule="evenodd"/>
            </svg>
          </a>
          <a className="box-social discord p-2 bg-gray-800 text-white rounded-full" href="https://discord.gg/seu-servidor-discord">
            <svg xmlns="http://www.w3.org/2000/svg" width="640" height="512" viewBox="0 0 640 512">
              <path fill="currentColor" d="M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485 485 0 0 0 404.081 32.03a1.82 1.82 0 0 0-1.923.91a338 338 0 0 0-14.9 30.6a447.9 447.9 0 0 0-134.426 0a310 310 0 0 0-15.135-30.6a1.89 1.89 0 0 0-1.924-.91a483.7 483.7 0 0 0-119.688 37.107a1.7 1.7 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.02 2.02 0 0 0 .765 1.375a487.7 487.7 0 0 0 146.825 74.189a1.9 1.9 0 0 0 2.063-.676A348 348 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588a321 321 0 0 1-45.868-21.853a1.885 1.885 0 0 1-.185-3.126a251 251 0 0 0 9.109-7.137a1.82 1.82 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.81 1.81 0 0 1 1.924.233a235 235 0 0 0 9.132 7.16a1.884 1.884 0 0 1-.162 3.126a301.4 301.4 0 0 1-45.89 21.83a1.875 1.875 0 0 0-1 2.611a391 391 0 0 0 30.014 48.815a1.86 1.86 0 0 0 2.063.7A486 486 0 0 0 610.7 405.729a1.88 1.88 0 0 0 .765-1.352c12.264-126.783-20.532-236.912-86.934-334.541M222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239c0 32.654-23.41 59.241-52.843 59.241m195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239c0 32.654-23.177 59.241-52.844 59.241"/>
            </svg>
          </a>
        </div>

      {/* Portfolio Link Widget */}
<div className="widget widget4 p-4 mb-4 bg-[#000] hover:bg-[#dc000043] text-white   hover:text-[#dc0000] shadow-lg rounded-lg">
  <Link to="/ThomasEduardo" className="meu-site flex items-center space-x-4">
    <img src="/logo.png" alt="website" className="w-10 h-10" />
    <h1 className="text-lg">Visite meu Portfolio</h1>
  </Link>
</div>

{/* Freelancer Request Widget */}
<div className="widget widget5 p-4 mb-4 bg-[#000] hover:bg-[#dc000043] text-white   hover:text-[#dc0000] shadow-lg  rounded-lg">
  <a href="./form.html" className="freelancer flex items-center space-x-4" target="_blank" rel="noopener noreferrer">
    <img src="/public/MyLinks/symbols.svg" alt="freelancer" className="w-5 h-5" />
    <h1 className="text-lg">Solicite seu Orçamento</h1>
  </a>
</div>

{/* WhatsApp Widget */}
<div className="widget widget5 p-4 mb-4 bg-[#000] hover:bg-[#dc000043] text-white   hover:text-[#dc0000] shadow-lg rounded-lg">
  <a href="./form.html" className="freelancer flex items-center space-x-4" target="_blank" rel="noopener noreferrer">
    <img src="/public/MyLinks/whatsapp.svg" alt="Whatsapp" className="w-5 h-5" />
    <h1 className="text-lg">WhatsApp</h1>
  </a>
</div>

        {/* Spotify Playlist Widget */}
        <div className="widget widget6">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/3wxDt6YF89FspnaMFWSu60?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MyLinks;