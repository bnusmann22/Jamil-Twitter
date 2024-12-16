const Msg = document.getElementById("Msg");
let newDate = new Date();
newDate = newDate.getFullYear();

const startTime = "20:45";

const [startHours, startMinutes] = startTime.split(":").map(Number);
const startDate = new Date();
startDate.setHours(startHours, startMinutes, 0, 0);

const updateCounter = () => {
  const currentDate = new Date();
  const elapsedDate = currentDate - startDate;

  const elapsedHours = Math.floor(elapsedDate / (1000 * 60 * 60));
  const elapsedMinutes = Math.floor(
    (elapsedDate % (1000 * 60 * 60)) / (1000 * 60)
  );

  Msg.innerHTML = ` built by Dev. Jamil 🚀 : <br> ${elapsedHours}hours , ${elapsedMinutes} Minutes Ago, in ${newDate}`;
};

setInterval(updateCounter, 1000);
updateCounter();
