let operacion = "";

function ajustarFuente() {
  const pantalla = document.getElementById("resultado");
  const longitud = pantalla.textContent.length;

  if (longitud > 12) {
    pantalla.style.fontSize = "1rem";
  } else if (longitud > 8) {
    pantalla.style.fontSize = "1.4rem";
  } else {
    pantalla.style.fontSize = "2rem";
  }
}

document.querySelectorAll(".btn").forEach(boton => {
  boton.addEventListener("click", () => {
    const valor = boton.textContent;

    if (valor === "C") {
      operacion = "";
      document.getElementById("resultado").textContent = "0";
      ajustarFuente();

    } else if (valor === "=") {
      try {
        operacion = operacion
          .replace(/×/g, "*")
          .replace(/÷/g, "/")
          .replace(/−/g, "-");
        let resultado = eval(operacion);
        document.getElementById("resultado").textContent = resultado;
        operacion = String(resultado);
        ajustarFuente();
      } catch {
        document.getElementById("resultado").textContent = "Error";
        operacion = "";
        ajustarFuente();
      }

    } else {
      operacion += valor;
      document.getElementById("resultado").textContent = operacion;
      ajustarFuente();
    }
  });
});

document.addEventListener("keydown", (e) => {
  const tecla = e.key;

  if (tecla >= "0" && tecla <= "9" || tecla === ".") {
    operacion += tecla;
    document.getElementById("resultado").textContent = operacion;
    ajustarFuente();

  } else if (tecla === "+") {
    operacion += "+";
    document.getElementById("resultado").textContent = operacion;
    ajustarFuente();

  } else if (tecla === "-") {
    operacion += "−";
    document.getElementById("resultado").textContent = operacion;
    ajustarFuente();

  } else if (tecla === "*") {
    operacion += "×";
    document.getElementById("resultado").textContent = operacion;
    ajustarFuente();

  } else if (tecla === "/") {
    e.preventDefault();
    operacion += "÷";
    document.getElementById("resultado").textContent = operacion;
    ajustarFuente();

  } else if (tecla === "Enter") {
    e.preventDefault();
    document.querySelector(".igual").click();

  } else if (tecla === "Backspace") {
    operacion = operacion.slice(0, -1);
    document.getElementById("resultado").textContent = operacion || "0";
    ajustarFuente();

  } else if (tecla === "Escape") {
    document.querySelector(".especial").click();
  }
});