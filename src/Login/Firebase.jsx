// Importa as funções necessárias
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyATagTHQ1EIdlHDtcM1g9gNLz6gNzglheU",
  authDomain: "devthmsite.firebaseapp.com",
  projectId: "devthmsite",
  storageBucket: "devthmsite.firebasestorage.app",
  messagingSenderId: "915428661426",
  appId: "1:915428661426:web:f8bbcdcc08a82db51251ab",
  measurementId: "G-53YMD4MT1N"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa outros serviços
const auth = getAuth(app); // Autenticação
const db = getFirestore(app); // Firestore
const storage = getStorage(app); // Armazenamento
const analytics = getAnalytics(app); // Analytics (se necessário)

// Exporta os serviços para uso em outros componentes
export { auth, db, storage, analytics };
