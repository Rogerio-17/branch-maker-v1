let aba = "Task";
let id = " ";
let brenchName = "";
let campoValue = document.querySelector("#formated");
let campoId = document.querySelector("#id");
let campoNomeBranch = document.querySelector("#branch");
let popup = document.querySelector(".popup-conteudo");

campoValue.readOnly = true;

campoValue.value = `${aba.toLowerCase()}/${id.toLowerCase()}-${brenchName.toLowerCase()}`;

function pegarValorCampo() {
  let linkInicial = document.querySelector(".barraDeNav");
  linkInicial.classList.add("selecionada");

  //Seleciona todos elementos
  let links = document.querySelectorAll(".barraDeNav");

  // percorre todos elementos
  for (let i = 0; i < links.length; i++) {
    //Adicona evento para todos elementos
    links[i].addEventListener("click", function () {
      event.preventDefault();
      aba = this.textContent;

      // Limpa os campos
      campoValue.value = `${aba.toLowerCase()}/${id.toLowerCase()}-${brenchName.toLowerCase()}`;
      // Remover a classe "selecionada" antes de adicionar no elemento clicado
      for (var x = 0; x < links.length; x++) {
        links[x].classList.remove("selecionada");
      }
      //Adiciona classe no elemento clicado
      this.classList.add("selecionada");
    });
  }
}

//Adiciona ID no campo para copiar
function addDadosNoCampoDeCopiar() {
  campoId.addEventListener("input", function () {
    brenchName = campoNomeBranch.value;
    let textoModificado = brenchName.replace(/\s/g, "-");
    id = campoId.value;
    campoValue.value = `${aba.toLowerCase()}/${id.toLowerCase()}-${textoModificado.toLowerCase()}`;
  });
}

// Adiciona nome da branch para copia
function addNomeBranch() {
  campoNomeBranch.addEventListener("input", function () {
    brenchName = campoNomeBranch.value;
    let textoModificado = brenchName.replace(/\s/g, "-");
    campoValue.value = `${aba.toLowerCase()}/${id.toLowerCase()}-${textoModificado.toLowerCase()}`;
  });
}

//Copia valor do campo
function copiar() {
  let copiar = document.querySelector("#cp");
  copiar.addEventListener("click", function () {
    event.preventDefault();

    // Verifica se os campos estão vazios, se sim não vai copiar
    if (campoId.value != "" && campoNomeBranch.value != "") {
      let txtoculto = "git checkout -b";
      brenchName = campoNomeBranch.value;
      let textoModificado = brenchName.replace(/\s/g, "-");
      campoValue.value = `${txtoculto} ${aba.toLowerCase()}/${id.toLowerCase()}-${textoModificado.toLowerCase()}`;
      let paraCopia = document.getElementById("formated");
      paraCopia.select();
      document.execCommand("copy");
    }
    //Verifica se tem campo vazio
    if (campoId.value != "" && campoNomeBranch.value != "") {
      let img = popup.querySelector("#img");
      let txt = popup.querySelector("#txt");
      txt.innerHTML = `Texto copiado para a área de transferência!`;
      img.src = "./img/check.png";

      exibirPopup();
    } else {
      let img = popup.querySelector("#img");
      let txt = popup.querySelector("#txt");
      txt.innerHTML = `Por favor!<br> Preencha todos os campos.`;
      img.src = "./img/x.png";
      exibirPopup();
    }
  });
}

// Exibe o popup
function exibirPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "flex";
}

// Fecha o popup
function fecharPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";

  // Limpa os campos apos ser fechado o popup
  id = " ";
  brenchName = "";
  campoId.value = "";
  campoNomeBranch.value = "";
  campoValue.value = `${aba.toLowerCase()}/${id.toLowerCase()}-${brenchName.toLowerCase()}`;
}

copiar();
addNomeBranch();
addDadosNoCampoDeCopiar();
pegarValorCampo();
