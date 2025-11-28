// database.js (sin type="module")
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

// Configuración
const firebaseConfig = {
  apiKey: "AIzaSyAn2frU1loNem53RdSiDIYuqTRXGNnUtL4",
  authDomain: "misquincemelisa.firebaseapp.com",
  projectId: "misquincemelisa",
  storageBucket: "misquincemelisa.firebasestorage.app",
  messagingSenderId: "767399967490",
  appId: "1:767399967490:web:9296591c2fc5ac129de01b"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Exportar funciones globales
window.guardarDeseo = function(nombre, mensaje) {
  return push(ref(db, "buenos-deseos/"), {
    nombre,
    mensaje,
    timestamp: new Date().toISOString()
  });
};

window.escucharDeseos = function(callback) {
  const wishesRef = ref(db, "buenos-deseos/");
  onValue(wishesRef, (snapshot) => {
    const lista = [];
    snapshot.forEach((child) => {
      lista.push(child.val());
    });
    callback(lista);
  });
};
window.toggleWishes = function () {
  const wishesDiv = document.getElementById("wishes-container");

  if (wishesDiv.classList.contains("visible")) {
    wishesDiv.classList.remove("visible");
    wishesDiv.classList.add("hidden");
    return;
  }

  if (wishesDiv.dataset.loaded === "true") {
    wishesDiv.classList.remove("hidden");
    wishesDiv.classList.add("visible");
    return;
  }

  onValue(ref(db, "buenos-deseos/"), (snapshot) => {
    requestIdleCallback(() => {
      wishesDiv.innerHTML = "";

      snapshot.forEach((childSnapshot) => {
        const wish = childSnapshot.val();
        const wishElement = document.createElement("p");
        wishElement.innerHTML = `<strong>${wish.nombre}:</strong> ${wish.mensaje}`;
        wishesDiv.appendChild(wishElement);
      });

      wishesDiv.dataset.loaded = "true";
      wishesDiv.classList.remove("hidden");
      wishesDiv.classList.add("visible");
    });
  });
};

