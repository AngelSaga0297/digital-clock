function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();

    document.getElementById("clock").textContent = time;
    document.getElementById("date").textContent = date;
}
setInterval(updateTime, 1000);
updateTime()