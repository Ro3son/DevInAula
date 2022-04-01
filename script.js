let buton = document.querySelector("button");
buton.addEventListener("click", carregar);

function carregar() {
  var msg = window.document.getElementById("msg");
  var foto = window.document.getElementById("imagem");
  var data = document.getElementById("time").value;
  const data2 = data.split(":")[0];
  var hora = data2;

  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    // Bom dia!
    foto.src = "imgs/manhã.png";
    document.body.style.background = "wheat";
    document.querySelector('h1').style.color = '#000';
  } else if (hora >= 12 && hora < 18) {
    //Boa tarde
    foto.src = "imgs/tarde.png";
    document.body.style.background = "#2475ff";
    document.querySelector('h1').style.color = 'white';
  } else {
    //boa noite
    foto.src = "imgs/noite.png";
    document.body.style.background = "#111112";
    document.querySelector('h1').style.color = 'white';
  }
}
