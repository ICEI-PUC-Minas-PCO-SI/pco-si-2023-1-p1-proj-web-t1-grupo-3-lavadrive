const descricao = document.querySelector('.form-control.mb-3.obs').value;
const usuario = window.localStorage.getItem('usuarioAtual');


const avaliacaoJSON = {
    nome:usuario.nome,
    placa:usuario.placa,
    descricao:descricao
}


const botaoFinalizar = document.querySelector('.btn.btn-outline-info.mb-2');
botaoFinalizar.addEventListener('click', async () => {
  const response = await fetch('https://192.168.15.12/avaliacao', {
    method: 'POST',
    body: JSON.stringify(avaliacaoJSON)
  });
});