const boton = document.querySelector("button");

boton.addEventListener("click", function () {
  const id = boton.getAttribute("data-id");

  if (boton.classList.contains("liked")) {
    boton.classList.remove("liked");
    boton.innerText = "Me gusta";
  } else {
    boton.classList.add("liked");
    boton.innerText = "No me gusta";
  }
});
