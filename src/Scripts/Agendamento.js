//Altera a descrição de acordo com o tipo de limpeza
function limpeza(button) {
    let Title = document.getElementById("limpTitle");
    let Desc = document.getElementById("limpDesc");

    if (button == 1) {
        Title.textContent = "Limpeza Rapida";
        Desc.textContent = "Limpeza nas máquinas com enxague automático, pinheiro aromático.";
    }
    else if (button == 2) {
        Title.textContent = "Limpeza Normal";
        Desc.textContent = "Limpeza nas máquinas com enxague automático, pinheiro aromático, aspiração completa, hidratação do banco e pretinho no pneu.";
    }
    else {
        Title.textContent = "Limpeza Completa";
        Desc.textContent = "Limpeza nas máquinas com enxague automático, pinheiro aromático, aspiração completa e pretinho no pneu.";
    }
}

//Altera o valor pra saber se a opção de pagamento adiantado esta ativa ou não
var pagAdiantado;

function pagarAdiantado() {
    pagAdiantado = !pagAdiantado;
}

//Caso a opção de pagamento adiantado estaja ativa envia para a tela de pagamento
function finalizar() {
    if (pagAdiantado == true) {
        window.location.href = "Pagamento.html";
    }
}

//Detecta os dias da semana e o mes
function diasDS() {
    let date = new Date;

    let name = date.getDay();
    let day = date.getDate() - name;

    let mesText = document.getElementById(`mes`);

    switch (date.getMonth()) {
        case 0:
            mesText.textContent = "Janeiro";
            break;
        case 1:
            mesText.textContent = "Fevereiro";
            break;
        case 2:
            mesText.textContent = "Março";
            break;
        case 3:
            mesText.textContent = "Abril";
            break;
        case 4:
            mesText.textContent = "Maio";
            break;
        case 5:
            mesText.textContent = "Junho";
            break;
        case 6:
            mesText.textContent = "Julho";
            break;
        case 7:
            mesText.textContent = "Agosto";
            break;
        case 8:
            mesText.textContent = "Setembro";
            break;
        case 9:
            mesText.textContent = "Outubro";
            break;
        case 10:
            mesText.textContent = "Novembro";
            break;
        case 11:
            mesText.textContent = "Dezembro";
            break;
    }

    for (let i = 0; i < 8; i++) {
        let dayText = document.getElementById(`dayT${i}`);

        if (name > 6) {
            let aux = name;
            name = 0 + (aux - 7);
        }

        dayText.innerHTML = `${day}`;

        name++;
        day++;
    }

}