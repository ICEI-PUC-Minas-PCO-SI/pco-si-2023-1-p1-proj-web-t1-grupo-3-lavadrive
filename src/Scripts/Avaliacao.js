const descricaoInput = document.getElementsByClassName("obs")[0];
const botaoFinalizar = document.getElementById("submit");
const usuarios = JSON.parse(window.localStorage.getItem("usuarios"));
let usuario;


for (let user of usuarios.cadastros) {
  if (+user.id === +usuarios.usuarioAtual) {
    usuario = user;
  }
}

botaoFinalizar.addEventListener("click", async() => {
  const descricao = descricaoInput.value;

  const avaliacaoJSON = {
    nome: usuario.nome,
    placa: usuario.carro[0].placa,
    descricao: descricao
  };

  await fetch("https://api-avaliacao.vercel.app/avaliacao", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(avaliacaoJSON),
      }).then(response => response.json())
      .then(data => console.log(data))
});
