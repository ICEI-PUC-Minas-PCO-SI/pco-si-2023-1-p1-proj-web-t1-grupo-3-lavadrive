/*const descricao = document.getElementsByClassName("obs").value;
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
    await fetch("http://192.168.15.12/avaliacao",  {
        method: "POST",
        body: JSON.stringify(avaliacaoJSON),
      });
});
*/
const descricaoInput = document.getElementsByClassName("obs")[0];
const botaoFinalizar = document.getElementById("submit");
const usuarios = JSON.parse(window.localStorage.getItem("usuarios"));
let usuario;


for (let user of usuarios.cadastros) {
  if (+user.id === +usuarios.usuarioAtual) {
    usuario = user;
  }
}

const placa = use.cadastros[user.usuarioAtual].carro[0].placa;

botaoFinalizar.addEventListener("click", () => {
  const descricao = descricaoInput.value;

  const avaliacaoJSON = {
    nome: usuario.nome,
    placa: usuario.carro[0].placa,
    descricao: descricao
  };

  // Obtém as avaliações armazenadas na localStorage
  const avaliacoes = JSON.parse(localStorage.getItem("avaliacoes")) || [];

  // Adiciona a nova avaliação
  avaliacoes.push(avaliacaoJSON);

  // Salva as avaliações atualizadas na localStorage
  localStorage.setItem("avaliacoes", JSON.stringify(avaliacoes));

  console.log('Avaliação adicionada com sucesso!');
});
