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