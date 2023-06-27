$(document).ready(function () {
  $("#botao").click(function () {
    $(".card-hidden").toggle();
  });
  
  var cardsToShow = 0;

  $("#ver-mais").click(function () {
    cardsToShow += 3;

    $(".card-hidden").slice(0, cardsToShow).show(); /* Mostra os primeiros cards */

    var $toggleButtons = $(".toggle-buttons");
    $toggleButtons.empty();

    if (cardsToShow >= 3) {
      var $verMenosButton = $("<button>").text("Ver menos").attr("id", "ver-menos");
      $toggleButtons.append($verMenosButton);
    }
  });

  $(document).on("click", "#ver-menos", function () {
    cardsToShow = 0;

    $(".card-hidden").slice(cardsToShow).hide(); /* Oculta os cards, fora os três primeiros */

    $("#ver-mais").show(); /* Mostra o botão "Ver mais" de novo */

    var $toggleButtons = $(".toggle-buttons");
    $toggleButtons.empty();
  });
});

function Mostrar() {
  fetch("https://api-avaliacao.vercel.app/agendamentos")
    .then(res => res.json())
    .then(data => {

      let usuarios = lerCadastrosSalvos();

      let tela = document.getElementById('tela');
      let str = '';

      let categorias = ["Hatch", "Sedan", "SUV", "Picape/Caminhonete", "Motocicleta", "Outro"];

      str += `<div class="container">`;
      str += `<div class="row">`;
      for (let w = 0; w < data.length; w++) {
        for (let k = 0; k < categorias.length; k++) {
          str += `<div class="col-lg-2 col-md-4 col-sm-6 col-12">`;
          str += `<h4 class="text-center">${categorias[k]}</h4>`;
          for (let j = 0; j < usuarios.cadastros.length; j++) {
            for (let i = 0; i < usuarios.cadastros[j].carro.length; i++) {
              if (categorias[k] == usuarios.cadastros[j].carro[i].categoria) {
                str +=
                  `
                        <div class="card mb-3" style="max-width: 16rem;">
                          <div class="card-body">
                            <p class="card-text">Modelo: ${usuarios.cadastros[j].carro[i].modelo}</p>
                            <p class="card-text">Placa: ${usuarios.cadastros[j].carro[i].placa}</p>
                            <p class="card-text">Cor: ${usuarios.cadastros[j].carro[i].cor}</p>
                            <p class="card-text">Dia marcado: </p>
                            <p class="card-text">Hora marcada: </p>
                            <button class="btn btn-primary">Editar</button>
                          </div>
                        </div>`;
              }
            }
          }
          str += `</div>`;
        }
      }
      str += `</div>`;
      str += `</div>`;

      tela.innerHTML = str;

      
    }
    )
}

fetch('https://api-avaliacao.vercel.app/avaliacao')
  .then(response => response.json())
  .then(data => {

    for (let i = 0; i < data.length; i++) {

      var colDiv = document.createElement('div');
      colDiv.className = 'col-md-4';

      var cardHiddenDiv = document.createElement('div');
      cardHiddenDiv.className = 'card-hidden';

      var cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      var cardTitle = document.createElement('h5');
      cardTitle.className = 'card-title';
      cardTitle.textContent = data[i].nome;

      var placaCarro = document.createElement('p');
      placaCarro.className = 'card-text';
      placaCarro.textContent = 'Placa do Carro: ' + data[i].placa;

      var textareaDiv = document.createElement('div');
      textareaDiv.className = 'mt-4';


      var textarea = document.createElement('textarea');
      textarea.className = 'form-control';
      textarea.rows = 3;
      textarea.textContent = data[i].descricao;

      textareaDiv.appendChild(textarea);
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(placaCarro);
      cardBody.appendChild(textareaDiv);
      cardHiddenDiv.appendChild(cardBody);
      colDiv.appendChild(cardHiddenDiv);


      var container = document.getElementById('cardContainer');
      container.appendChild(colDiv);
    }
  })
  .catch(error => {
    console.log('Ocorreu um erro:', error);
  });