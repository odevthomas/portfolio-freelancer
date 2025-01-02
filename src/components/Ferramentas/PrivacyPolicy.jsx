import React, { useState } from "react";

const PrivacyPolicy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal} className="btn">
        Ver Política de Privacidade
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h1>Política de Privacidade e Uso de Dados</h1>

            <section>
              <h2>Informações sobre Gil Barbosa | Beauty Center</h2>
              <p><strong>Perfil:</strong> Gil Barbosa | Beauty Center</p>
              <p><strong>Instagram:</strong> gilbarbosabeautycenter</p>
              <p><strong>Publicações:</strong> 106 publicações</p>
              <p><strong>Seguidores:</strong> 2.272 seguidores</p>
              <p><strong>Seguindo:</strong> 425 seguindo</p>
              <p><strong>Descrição:</strong> Evidencio ainda mais a sua beleza + 20 anos no mercado Beauty ✨</p>
              <p><strong>Serviços:</strong> Sobrancelhas | Massagens Corporais | Microagulhamentos...</p>
              <p><strong>Agendamento:</strong> <a href="https://bit.ly/agendeagoraGilBarbosa" target="_blank" rel="noopener noreferrer">Agende Agora</a></p>
            </section>

            <section>
              <h2>1. Coleta de Dados Pessoais</h2>
              <p>
                A Casa L'Ellit coleta informações pessoais, como nome, email e telefone, quando você utiliza nossos serviços ou se inscreve em nossos formulários de contato. Esses dados são utilizados para fornecer uma experiência personalizada, bem como para responder a perguntas ou fornecer ofertas relacionadas aos nossos serviços de beleza.
              </p>
            </section>

            <section>
              <h2>2. Uso de Dados</h2>
              <p>
                As informações fornecidas são usadas apenas para fins de comunicação e serviços relacionados à Casa L'Ellit. Não compartilhamos seus dados pessoais com terceiros sem o seu consentimento prévio, exceto quando exigido por lei ou para realizar a entrega dos serviços contratados.
              </p>
            </section>

            <section>
              <h2>3. Armazenamento de Dados</h2>
              <p>
                Seus dados pessoais são armazenados em servidores seguros e protegidos. Tomamos medidas para garantir que suas informações estejam protegidas contra acessos não autorizados.
              </p>
            </section>

            <section>
              <h2>4. Cookies e Tecnologias de Rastreamento</h2>
              <p>
                Utilizamos cookies e tecnologias semelhantes para melhorar a experiência de navegação no nosso site e para análises de dados de tráfego. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do nosso site.
              </p>
            </section>

            <section>
              <h2>5. Uso de Inteligência Artificial para Mensagens Automáticas</h2>
              <p>
                Para facilitar a comunicação com nossos clientes, utilizamos inteligência artificial para enviar mensagens automatizadas, como assistente no WhatsApp. Essas mensagens podem ser usadas para fornecer informações sobre nossos serviços, promoções e responder a perguntas frequentes. Sempre que possível, você terá a opção de falar diretamente com um atendente humano.
              </p>
            </section>

            <section>
              <h2>6. Seus Direitos</h2>
              <p>
                Você tem o direito de acessar, corrigir ou excluir seus dados pessoais armazenados por nós. Caso deseje exercer seus direitos, entre em contato conosco através dos canais disponíveis no nosso site.
              </p>
            </section>

            <section>
              <h2>7. Alterações na Política de Privacidade</h2>
              <p>
                A Casa L'Ellit pode atualizar esta Política de Privacidade periodicamente. Quaisquer alterações serão publicadas nesta página, e recomendamos que você a revise regularmente.
              </p>
            </section>

            <section>
              <h2>8. Contato</h2>
              <p>
                Se você tiver alguma dúvida sobre nossa Política de Privacidade, entre em contato conosco através do nosso telefone ou email.
              </p>
              <p><strong>Telefone:</strong> +55 19 3365-7011</p>
              <p><strong>Email:</strong> contato@casalellit.com.br</p>
            </section>

            <button onClick={toggleModal} className="close-modal">
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicy;
