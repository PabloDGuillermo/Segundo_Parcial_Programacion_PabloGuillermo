const botonObras = document.getElementById("botonObras");
const botonLogs = document.getElementById("botonLogs");

botonObras.addEventListener("click", async () => {
    window.location.href="/obras";
});

botonLogs.addEventListener("click", async () => {
    window.location.href="/logs";
});