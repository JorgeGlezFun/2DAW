document.addEventListener("DOMContentLoaded", ()=>{
    var posicionX = 0;
    var posicionY = 0;
    clic = false;
    var contenedor = document.getElementById("contenedor");
    var texto = document.getElementById("texto");
    window.addEventListener("mousedown", (e)=>{
      clic = true;
      texto.textContent = "TEXTO NUEVO";
      posicionX = e.clientX - contenedor.offsetLeft;
      posicionY = e.clientY - contenedor.offsetTop;
    });

    window.addEventListener("mousemove", (e)=>{
      if (clic) {
        let newX = e.clientX - posicionX;
        let newY = e.clientY - posicionY;
        contenedor.style.left = newX + "px";
        contenedor.style.top = newY + "px";
      }
    });

    window.addEventListener("mouseup", () => {
        texto.textContent = "TEXTO ORIGINAL"
        clic = false;
    });
  });
