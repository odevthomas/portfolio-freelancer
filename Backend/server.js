require('dotenv').config(); // Carrega as variáveis de ambiente
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(cors());  // Permite conexões do frontend em outro domínio
app.use(express.json());  // Faz o parse do JSON no corpo da requisição

// Rota de envio de email
app.post("/enviar-email", async (req, res) => {
  const { nome, email, mensagem } = req.body;

  // Configuração do transporte para enviar o email
  const transporter = nodemailer.createTransport({
    service: "hotmail", // Usar 'hotmail' para o serviço Outlook
    auth: {
      user: process.env.EMAIL_USER,  // Seu e-mail armazenado na variável de ambiente
      pass: process.env.EMAIL_PASS,  // Sua senha ou senha do aplicativo armazenada na variável de ambiente
    },
    tls: {
      rejectUnauthorized: false, // Permitir conexão segura (SSL/TLS)
    },
  });

  try {
    // Enviando o e-mail
    await transporter.sendMail({
      from: email,  // O e-mail que enviou a mensagem
      to: "developer.thomas@outlook.com.br",  // O e-mail que vai receber a mensagem
      subject: `Mensagem de ${nome}`,
      text: mensagem,
    });

    // Resposta de sucesso
    res.status(200).json({ message: "Mensagem enviada com sucesso!" });
  } catch (error) {
    console.error('Erro ao enviar email:', error);  // Mensagem de erro completa para facilitar o diagnóstico
    res.status(500).json({ message: "Erro ao enviar mensagem." });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
