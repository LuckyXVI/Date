const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "¡Te veo en el Café Jazzito a las 8:00 P.M.!";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  
  // Ocultar botones
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // Esperar 10 segundos y abrir WhatsApp
  setTimeout(() => {
      const numeroTelefono = "523841041238"; // Reemplaza con el número de WhatsApp
      const mensaje = encodeURIComponent("¡Nos vemos en el Café Jazzito a las 8:00 P.M.! 😊☕");
      window.location.href = `https://wa.me/${numeroTelefono}?text=${mensaje}`;
  }, 10000); // 10000 milisegundos = 10 segundos
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
