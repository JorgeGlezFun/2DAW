document.addEventListener("DOMContentLoaded", ()=>{
    var posicionX = 0;
    var posicionY = 0;
    clic = false;
    var contenedor = document.getElementById("contenedor");

    window.addEventListener("mousedown", (e)=>{
      clic = true;
      contenedor.style.backgroundImage = 'url("boo_activo.png")';
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
        contenedor.style.backgroundImage = 'url("boo_desactivado.png")';
        clic = false;
    });
  });
