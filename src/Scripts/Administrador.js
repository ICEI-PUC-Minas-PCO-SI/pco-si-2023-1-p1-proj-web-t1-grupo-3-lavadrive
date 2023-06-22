$(document).ready(function () {
    $("#botao").click(function () {
        $(".card-hidden").toggle();
    });
    var cardCount = $(".card-hidden").length;
    var cardsToShow = 0;

    $("#ver-mais").click(function () {
        cardsToShow += 3;

        $(".card-hidden").slice(0, cardsToShow).show(); /* Mostra os primeiros cards */

        if (cardsToShow >= cardCount) {
            $(this).hide(); /* Esconde o botão "Ver mais" quando não tiver mais cards para mostrar */
        }

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

function Mostrar(){

    let usuarios = lerCadastrosSalvos()

    let tela = document.getElementById('tela');
    let str = '';
    let categorias= ["Hatch","Sedan","SUV","Picape/Caminhonete","Motocicleta","Outro"]
    
    for (let k=0;k<categorias.length;k++){

      for (let j=0;j<usuarios.cadastros.length;j++){
        for (let i=0;i<usuarios.cadastros[j].carro.length;i++){ 
            if (categorias[k]==usuarios.cadastros[j].carro[i].categoria){
               
        str+= `<div class="card" style="width: 18rem;">
        
        <div class="card-body">
          <h5 class="card-title">Categoria: ${usuarios.cadastros[j].carro[i].categoria}</h5>
          <p class="card-text">Modelo: ${usuarios.cadastros[j].carro[i].modelo}</p>
          <p class="card-text">Placa: ${usuarios.cadastros[j].carro[i].placa}</p>
          <p class="card-text">Cor: ${usuarios.cadastros[j].carro[i].cor}</p>
          <p class="card-text">Dia marcado: </p>
          <p class="card-text">Hora marcada: </p>
          <button class="btn btn-primary">Editar</button>
        </div>
      </div>`
            }
        }
    }
  }
        tela.innerHTML=str
        
    }

