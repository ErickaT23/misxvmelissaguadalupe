// loads.js

// Array disponible globalmente
window.guests = [
  { id: "1", name: "Fatima de Leon", passes: 2 },
  { id: "2", name: "Macarena & Rogelio", passes: 2 },
  // … resto de invitados
];

// Solo carga los datos del invitado. NO abre la invitación.
document.addEventListener("DOMContentLoaded", () => {
  const params  = new URLSearchParams(window.location.search);
  const guestId = params.get("id");
  const guest   = window.guests.find(g => g.id === guestId);

  if (guest) {
    // Texto con invitación personalizada
    const invitText = guest.passes > 1
      ? `${guest.name}`
      : `${guest.name}`;

    // Coloca nombre
    const nombreElem = document.getElementById("nombreInvitado");
    if (nombreElem) nombreElem.textContent = invitText;

    // Coloca pases
    const pasesElem = document.getElementById("cantidadPases");
    if (pasesElem)
      pasesElem.textContent = `Pases: ${guest.passes}`;
      
    // ❌ YA NO abrir automáticamente la invitación
    // if (typeof abrirInvitacion === "function") abrirInvitacion();

  } else {
    console.warn("Invitado no encontrado");
    // Opcional: podrías ocultar o dejar invitación genérica
  }
});



  