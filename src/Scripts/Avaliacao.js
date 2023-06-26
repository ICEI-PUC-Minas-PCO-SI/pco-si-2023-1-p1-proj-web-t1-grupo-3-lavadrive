const descricao = document.getElementsByClassName("obs").value;
const botaoFinalizar = document.getElementById("submit");
const usuarios = JSON.parse(window.localStorage.getItem("usuarios"));
let usuario;

for(let user of usuarios.cadastros){
  if(+user.id === +usuarios.usuarioAtual){
    usuario = user;
  }
}

const avaliacaoJSON = {
    nome: usuario.nome,
    placa: usuario.placa,
    descricao: descricao,
  };

botaoFinalizar.addEventListener("click", async () => {

  const response = await fetch("https://192.168.15.12/avaliacao", {
    method: "POST",
    body: JSON.stringify(avaliacaoJSON),
  });
});