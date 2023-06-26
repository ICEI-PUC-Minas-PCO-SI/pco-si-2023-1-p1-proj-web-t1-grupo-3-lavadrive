const descricao = document.getElementsByClassName("obs").value;
const botaoFinalizar = document.getElementById("submit");
const usuarios = JSON.parse(window.localStorage.getItem("usuarios"));
let usuario;

for (let user of usuarios.cadastros) {
    if (+user.id === +usuarios.usuarioAtual) {
        usuario = user;
    }
}

botaoFinalizar.addEventListener("click", async () => {
    const avaliacaoJSON = {
      nome: usuario.nome,
      placa: usuario.carro.placa,
      descricao: descricao
    };
    await fetch("http://192.168.15.12/avaliacao", {
        method: "POST",
        body: JSON.stringify(avaliacaoJSON)
      });
  });
  