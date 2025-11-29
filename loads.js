// loads.js

// Array disponible globalmente
window.guests = [
  { id: "1", name: "Fatima de Leon", passes: 2 },
  { id: "2", name: "Valeria Castillo", passes: 1 },
  { id: "3", name: "Lynda Rivera", passes: 1 },
  { id: "4", name: "Pamela Solares", passes: 1 },
  { id: "5", name: "Ashly Paz", passes: 2 },
  { id: "6", name: "Doris Pinto", passes: 1 },
  { id: "7", name: "Fernanda Olivarez", passes: 1 },
  { id: "8", name: "Roxana Montepeque", passes: 1 },
  { id: "9", name: "Dulce Barrientos", passes: 1 },
  { id: "10", name: "Raquel Monterroso", passes: 1 },
  { id: "11", name: "Belen Moran", passes: 1 },
  { id: "12", name: "Ibana Rodriguez", passes: 1 },
  { id: "13", name: "Allyson Ralon", passes: 1 },
  { id: "14", name: "Karla Barrios", passes: 1 },
  { id: "15", name: "Raul Hernandez", passes: 1 },
  { id: "16", name: "Jorge Gomez", passes: 1 },
  { id: "17", name: "Enrique Gomez", passes: 1 },
  { id: "18", name: "Esteban Torres", passes: 1 },
  { id: "19", name: "Daniel Paz", passes: 1 },
  { id: "20", name: "Samuel Antuche", passes: 1 },
  { id: "21", name: "Andres Juarez", passes: 1 },
  { id: "22", name: "Emilio Gutierrez", passes: 1 },
  { id: "23", name: "Josue Paz", passes: 1 },
  { id: "24", name: "Javier Juarez", passes: 1 },
  { id: "25", name: "Brayan Gonzales", passes: 1 },
  { id: "26", name: "Cristian Arevalo", passes: 1 },
  { id: "27", name: "Japhe Marroquin", passes: 1 },
  { id: "28", name: "Alexander Donis", passes: 1 },
  { id: "29", name: "Emerson Perez", passes: 1 },
  { id: "30", name: "Thamara Raxon", passes: 1 },
  { id: "31", name: "Ashley Berrios", passes: 1 },
  { id: "32", name: "Marcela Paz", passes: 1 },
  { id: "33", name: "Christopher Chavarria", passes: 1 },
  { id: "34", name: "Brayan Chavarria", passes: 1 },
  { id: "35", name: "Jose Salazar", passes: 1 },
  { id: "36", name: "Joshua Mendoza", passes: 2 },
  { id: "37", name: "Camila Ortiz", passes: 1 },
  { id: "38", name: "Sofia de Leon", passes: 1 },
  { id: "39", name: "Sebastian de Leon", passes: 1 },
  { id: "40", name: "Emily Castañeda", passes: 4 },
  { id: "41", name: "Mercy Marroquin", passes: 3 },
  { id: "42", name: "Valeria Lopez", passes: 2 },
  { id: "43", name: "Daniela Jom", passes: 1 },
  { id: "44", name: "Giselle Maldonado", passes: 1 },
  { id: "45", name: "Sofia Villatoro", passes: 1 },
  { id: "46", name: "Jordy Morales", passes: 1 },
  { id: "47", name: "Mayra Trujillo", passes: 1 },
  { id: "48", name: "Cristy Valverde", passes: 1 },
  { id: "49", name: "Norma Trujillo", passes: 1 },
  { id: "50", name: "Lusvin Fuentes", passes: 1 },
  { id: "51", name: "Onan Orantes", passes: 1 },
  { id: "52", name: "Rosy Orantes", passes: 1 },
  { id: "53", name: "Familia Zuñiga Pineda", passes: 2 },
  { id: "54", name: "Andrea Noriega", passes: 1 }
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



  