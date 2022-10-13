let timer = document.querySelector(".timer");
let segundos = 0;
let interval;

const relogio = (segundos) => {
  const date = new Date(segundos * 1000);
  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
};

const iniciar = () => {
  clearInterval(interval);
  interval = setInterval(() => {
    segundos++;
    timer.style.color = "#000";
    timer.innerHTML = relogio(segundos);
  }, 1000);
};

const pausar = () => {
  clearInterval(interval);
  timer.style.color = "red";
};

const zerar = () => {
  segundos = 0;
  clearInterval(interval);
  timer.style.color = "red";
  timer.innerHTML = relogio(segundos);
};
