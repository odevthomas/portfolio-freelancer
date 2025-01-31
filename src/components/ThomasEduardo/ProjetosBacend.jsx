import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink, FiChevronLeft, FiChevronRight, FiCopy, FiCheck } from "react-icons/fi";
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Componente Modal para Zoom da Imagem
const ImageModal = ({ isOpen, image, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.img
        src={image}
        alt="Projeto em destaque"
        className="max-w-[95vw] max-h-[95vh] sm:max-w-[90vw] sm:max-h-[90vh] object-contain rounded-lg shadow-2xl"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 20 }}
      />
      <button 
        className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-[#dc0000] transition-colors"
        onClick={onClose}
      >
        <svg xmlns="http://www.w3.org/20a0a0a/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
};

// Componente CodeBlock para exibir código com syntax highlighting e botão de copiar
const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 z-10"
        title="Copiar código"
      >
        {copied ? (
          <FiCheck className="w-5 h-5 text-green-500" />
        ) : (
          <FiCopy className="w-5 h-5 text-white/70 group-hover:text-white" />
        )}
      </button>
      <SyntaxHighlighter
        language="javascript"
        style={atomDark}
        customStyle={{
          padding: '2rem',
          borderRadius: '0.75rem',
          margin: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
        wrapLongLines={true}
        showLineNumbers={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
};

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const projectImages = [
    "/Projetos/telegram-bot.png", // Novo projeto (Telegram Bot)
    "/Projetos/formulario-contato.png", // Novo projeto (Formulário de Contato)
    "/Projetos/weather-app.png", // Novo projeto (Weather App)
    "/Projetos/link-shortener.png", // Novo projeto (Link Shortener)
    "/Projetos/whatsapp-assistant.png", // Novo projeto (WhatsApp Assistant)
  ];

  const projectDetails = [
    {
      title: "Telegram Assistente Inteligente Bot 🤖",
      description:
        "Bot inteligente para Telegram desenvolvido para automatizar processos de comunicação e agendamento. Utiliza IA para fornecer respostas contextualizadas, gerencia múltiplas conversas simultaneamente e oferece recursos avançados como agendamento automático, lembretes e integração com APIs externas.",
      projectLink: "https://github.com/odevthomas/Telegram-Assistant-Bot",
      tags: ["Telegram API", "Node.js", "Bot", "Automação", "Integração", "MongoDB", "Express", "WebHooks"],
      stats: {
        agendamentos: "+200%",
        engajamento: "+50%",
        feedbacks: "100% positivos",
      },
      features: [
        "Processamento de linguagem natural",
        "Sistema de agendamento automático",
        "Integração com calendário",
        "Respostas personalizadas",
        "Dashboard administrativo"
      ],
      tecnologias: {
        backend: ["Node.js", "Express", "MongoDB"],
        apis: ["Telegram Bot API", "OpenAI GPT-3"],
        ferramentas: ["Docker", "Jest", "PM2"]
      }
    },
    {
      title: "Formulário de Contato com Banco de Dados",
      description:
        "Sistema completo de formulário de contato com validação avançada, proteção contra spam, armazenamento seguro em MongoDB e sistema de notificação multicanal. Inclui painel administrativo para gestão de mensagens e análise de métricas de uso.",
      projectLink: "https://github.com/odevthomas/Formulario-de-contato-com-db",
      tags: ["Node.js", "Express", "MongoDB", "Formulário", "API REST", "JWT", "Redis"],
      stats: {
        envios: "+1000",
        usuários: "+500",
        sucesso: "98%",
      },
      features: [
        "Validação em tempo real",
        "Sistema anti-spam",
        "Notificações por email",
        "Dashboard analítico",
        "Exportação de dados"
      ],
      tecnologias: {
        backend: ["Node.js", "Express", "MongoDB"],
        seguranca: ["JWT", "Helmet", "Rate Limiting"],
        cache: ["Redis"]
      }
    },
    {
      title: "Weather App (Aplicativo de Clima)",
      description:
        "Aplicação robusta de previsão do tempo que combina dados de múltiplas APIs meteorológicas para fornecer informações precisas e detalhadas. Inclui sistema de cache inteligente, histórico de consultas e alertas meteorológicos personalizados.",
      projectLink: "https://github.com/odevthomas/Weather-App",
      tags: ["React", "API", "Clima", "JavaScript", "Redis", "Node.js", "WebSocket"],
      stats: {
        cidades: "+50",
        usuários: "+200",
        avaliações: "4.5/5",
      },
      features: [
        "Previsão detalhada 7 dias",
        "Alertas em tempo real",
        "Mapas interativos",
        "Histórico de consultas",
        "Modo offline"
      ],
      tecnologias: {
        backend: ["Node.js", "Express"],
        cache: ["Redis"],
        apis: ["OpenWeather", "WeatherAPI"],
        realtime: ["WebSocket"]
      }
    },
    {
      title: "Link Shortener (Encurtador de Links com React)",
      description:
        "Plataforma avançada de encurtamento de URLs com análise de tráfego, personalização de links, proteção contra spam e dashboard completo de métricas. Suporta links expiráveis e rastreamento de cliques em tempo real.",
      projectLink: "https://github.com/odevthomas/Link-shortener-using-React",
      tags: ["React", "URL", "API", "Front-end", "MongoDB", "Redis", "Analytics"],
      stats: {
        "links encurtados": "+3000",
        usuários: "+1000",
        feedbacks: "4.8/5",
      },
      features: [
        "Links personalizados",
        "QR Code generator",
        "Análise de tráfego",
        "Proteção contra spam",
        "API pública"
      ],
      tecnologias: {
        backend: ["Node.js", "Express", "MongoDB"],
        cache: ["Redis"],
        monitoramento: ["Prometheus", "Grafana"]
      }
    },
    {
      title: "WhatsApp Assistant Virtual",
      description:
        "Assistente virtual avançado para WhatsApp que utiliza múltiplos modelos de IA para fornecer suporte contextualizado, automação de tarefas e integração com sistemas externos. Suporta processamento de linguagem natural em múltiplos idiomas e aprendizado contínuo.",
      projectLink: "https://github.com/odevthomas/WhatsApp-Assistant",
      tags: ["WhatsApp", "Chatbot", "AI", "Integração", "NLP", "Machine Learning"],
      stats: {
        interações: "+5000",
        "respostas precisas": "98%",
        satisfação: "95%",
      },
      features: [
        "Múltiplos modelos de IA",
        "Aprendizado contínuo",
        "Suporte multilíngue",
        "Integração com CRM",
        "Analytics avançado"
      ],
      tecnologias: {
        backend: ["Node.js", "Python", "MongoDB"],
        ia: ["OpenAI GPT-3", "Google Gemini", "TensorFlow"],
        integracao: ["WhatsApp Business API", "Twilio"]
      }
    },
  ];

  const projectCodes = [
    `// Telegram Assistente Inteligente Bot 🤖
const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Configuração do Bot
class TelegramAssistant {
  constructor() {
    this.bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
    this.connectDatabase();
    this.initializeCommands();
  }

  async connectDatabase() {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('✅ Banco de dados conectado com sucesso!');
    } catch (error) {
      console.error('❌ Erro ao conectar ao banco de dados:', error);
    }
  }

  initializeCommands() {
    this.bot.onText(/\\/start/, this.handleStart.bind(this));
    this.bot.onText(/\\/agendar/, this.handleSchedule.bind(this));
    // Mais comandos...
  }

  async handleStart(msg) {
    const welcomeMessage = \`
    🤖 Olá! Eu sou o Assistente Virtual.
    Como posso ajudar você hoje?
    
    Comandos disponíveis:
    /start - Iniciar conversa
    /agendar - Fazer um agendamento
    /ajuda - Ver todos os comandos
    \`;
    
    await this.bot.sendMessage(msg.chat.id, welcomeMessage);
  }
}

// Inicialização
dotenv.config();
const assistant = new TelegramAssistant();`,

    `// Formulário de Contato com MongoDB
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

// Modelo do Contato
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Configuração do Express
class ContactAPI {
  constructor() {
    this.app = express();
    this.setupMiddlewares();
    this.setupRoutes();
  }

  setupMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    
    // Rate Limiting
    const limiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutos
      max: 100 // limite por IP
    });
    
    this.app.use(limiter);
  }

  setupRoutes() {
    this.app.post('/api/contact', async (req, res) => {
      try {
        const contact = new Contact(req.body);
        await contact.save();
        
        // Enviar email de confirmação
        await this.sendConfirmationEmail(contact.email);
        
        res.status(201).json({
          success: true,
          message: 'Mensagem enviada com sucesso!'
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Erro ao enviar mensagem.'
        });
      }
    });
  }
}

// Inicialização
const api = new ContactAPI();
api.listen(3000);`,

    `// Weather App - Backend API
const express = require('express');
const axios = require('axios');
const redis = require('redis');

class WeatherAPI {
  constructor() {
    this.app = express();
    this.redisClient = redis.createClient();
    this.setupCache();
    this.setupRoutes();
  }

  async setupCache() {
    await this.redisClient.connect();
    console.log('✅ Redis conectado com sucesso!');
  }

  setupRoutes() {
    this.app.get('/api/weather/:city', async (req, res) => {
      try {
        // Verificar cache primeiro
        const cachedData = await this.redisClient.get(req.params.city);
        if (cachedData) {
          return res.json(JSON.parse(cachedData));
        }

        // Buscar dados da API externa
        const response = await axios.get(
          \`https://api.openweathermap.org/data/2.5/weather?q=\${req.params.city}&appid=\${process.env.WEATHER_API_KEY}\`
        );

        // Salvar no cache por 30 minutos
        await this.redisClient.setEx(
          req.params.city,
          1800,
          JSON.stringify(response.data)
        );

        res.json(response.data);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dados do clima' });
      }
    });
  }
}

// Inicialização
const weatherAPI = new WeatherAPI();
weatherAPI.listen(3000);`,

    `// Link Shortener - Backend
const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');

// Modelo do Link
const LinkSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortCode: { type: String, unique: true },
  clicks: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

class LinkShortener {
  constructor() {
    this.app = express();
    this.setupDatabase();
    this.setupRoutes();
  }

  async setupDatabase() {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('✅ Banco de dados conectado!');
    } catch (error) {
      console.error('❌ Erro na conexão:', error);
    }
  }

  setupRoutes() {
    // Criar link curto
    this.app.post('/api/shorten', async (req, res) => {
      try {
        const { url } = req.body;
        const shortCode = shortid.generate();
        
        const link = new Link({
          originalUrl: url,
          shortCode
        });
        
        await link.save();
        
        res.json({
          shortUrl: \`\${process.env.BASE_URL}/\${shortCode}\`
        });
      } catch (error) {
        res.status(500).json({ error: 'Erro ao encurtar link' });
      }
    });

    // Redirecionar
    this.app.get('/:code', async (req, res) => {
      try {
        const link = await Link.findOne({ shortCode: req.params.code });
        if (!link) {
          return res.status(404).json({ error: 'Link não encontrado' });
        }
        
        link.clicks++;
        await link.save();
        
        res.redirect(link.originalUrl);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao redirecionar' });
      }
    });
  }
}

// Inicialização
const shortener = new LinkShortener();
shortener.listen(3000);`,

    `// WhatsApp Assistant com IA
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { Configuration, OpenAIApi } = require('openai');

class WhatsAppAssistant {
  constructor() {
    this.client = new Client();
    this.openai = new OpenAIApi(
      new Configuration({
        apiKey: process.env.OPENAI_API_KEY
      })
    );
    
    this.setupWhatsApp();
  }

  setupWhatsApp() {
    this.client.on('qr', (qr) => {
      qrcode.generate(qr, { small: true });
    });

    this.client.on('ready', () => {
      console.log('✅ WhatsApp Client está pronto!');
    });

    this.client.on('message', async (message) => {
      try {
        if (message.body.startsWith('!assist')) {
          const response = await this.generateAIResponse(message.body);
          await message.reply(response);
        }
      } catch (error) {
        console.error('❌ Erro ao processar mensagem:', error);
      }
    });
  }

  async generateAIResponse(message) {
    try {
      const completion = await this.openai.createCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
        max_tokens: 150
      });
      
      return completion.data.choices[0].message.content;
    } catch (error) {
      return 'Desculpe, não consegui processar sua mensagem.';
    }
  }
}

// Inicialização
const assistant = new WhatsAppAssistant();
assistant.client.initialize();`
  ];

  const handleNavigation = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
    } else {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + projectImages.length) % projectImages.length
      );
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <motion.section
      id="projetos"
      className="py-10 sm:py-20 min-h-screen bg-gradient-to-b from-black via-[#111] to-black text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div style={{ y }} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-20"
        >
          <div className="inline-block">
            <span className="inline-block text-[#dc0000] text-sm sm:text-base md:text-lg font-bold tracking-wider px-4 sm:px-8 py-2 sm:py-3 border-2 border-[#dc0000] rounded-full hover:bg-[#dc0000]/10 transition-all duration-300">
              Portfólio Backend
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4">
              <span className="bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text">
                Soluções em
              </span>
              <br />
              <span className="text-[#dc0000]">Desenvolvimento</span>
            </h2>
          </div>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            Explorando a excelência em desenvolvimento backend através de projetos inovadores e soluções escaláveis.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <span className="text-sm text-gray-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              APIs RESTful
            </span>
            <span className="text-sm text-gray-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Microsserviços
            </span>
            <span className="text-sm text-gray-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              Automação
            </span>
          </div>
        </motion.div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-12">
            <motion.div 
              className="w-full lg:w-2/3 relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-[0_0_30px_rgba(220,0,0,0.15)] h-[300px] sm:h-[400px] lg:h-[600px]">
                <div className="w-full h-full overflow-auto custom-scrollbar">
                  <CodeBlock code={projectCodes[currentIndex]} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 sm:left-4 sm:right-4 flex justify-between pointer-events-none">
                <button
                  onClick={() => handleNavigation("prev")}
                  className="p-2 sm:p-3 rounded-full bg-black/50 backdrop-blur-sm text-white pointer-events-auto hover:bg-[#dc0000] transition-all duration-300"
                >
                  <FiChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
                </button>
                <button
                  onClick={() => handleNavigation("next")}
                  className="p-2 sm:p-3 rounded-full bg-black/50 backdrop-blur-sm text-white pointer-events-auto hover:bg-[#dc0000] transition-all duration-300"
                >
                  <FiChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
                </button>
              </div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-1/3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/[0.03] backdrop-blur-sm p-6 sm:p-10 rounded-xl sm:rounded-2xl border border-white/10 h-full flex flex-col">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                  {projectDetails[currentIndex].title}
                  <div className="h-1 w-16 sm:w-20 bg-[#dc0000] mt-3 sm:mt-4"></div>
                </h3>
                <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                  {projectDetails[currentIndex].description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                  {projectDetails[currentIndex].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-white/5 border border-[#dc0000]/20 text-[#dc0000] rounded-full hover:bg-[#dc0000]/10 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-white">Principais Recursos:</h4>
                  <ul className="space-y-2">
                    {projectDetails[currentIndex].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-[#dc0000] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={projectDetails[currentIndex].projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto group flex items-center justify-center gap-2 sm:gap-3 bg-[#dc0000] hover:bg-[#b00000] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[#dc0000]/20"
                >
                  Ver Projeto
                  <FiExternalLink className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
            {projectCodes.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 $(
                  currentIndex === index 
                    ? "bg-[#dc0000] w-8 sm:w-10" 
                    : "bg-white/20 w-4 sm:w-6 hover:bg-[#dc0000]/50"
                )`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <ImageModal
        isOpen={isModalOpen}
        image={projectImages[currentIndex]}
        onClose={() => setIsModalOpen(false)}
      />
    </motion.section>
  );
};

ProjectSection.propTypes = {
  // Defina os tipos das suas props aqui
  // Por exemplo:
  // isOpen: PropTypes.bool.isRequired,
  // image: PropTypes.string.isRequired,
  // onClose: PropTypes.func.isRequired,
};

export default ProjectSection;
