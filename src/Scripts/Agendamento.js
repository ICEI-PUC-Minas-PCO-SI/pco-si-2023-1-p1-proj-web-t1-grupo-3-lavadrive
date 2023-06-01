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

    // Obter a data atual
    let dataAtual = new Date();
    
    // Obter o dia da semana (0 = Domingo, 1 = Segunda, ...)
    let diaDaSemana = dataAtual.getDay();
    
    // Definir a data de início da semana subtraindo o dia da semana atual da data atual
    let diaInicial = new Date(dataAtual);
    diaInicial.setDate(dataAtual.getDate() - diaDaSemana);
    
    // Criar um array para armazenar os meses
    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Outubro','Novembro','Setembro','Dezembro'];
    
    //Define no calendario o mes
    document.getElementById('mes').textContent =meses[new Date(diaInicial).getMonth()+1];
    
    // Criar um loop para definir os dias da semana
    for (let i = 0; i < 7; i++) {
        // Calcular a data para cada dia da semana
        let date = new Date(diaInicial);
    
        date.setDate(diaInicial.getDate() + i);
    
        // Obter o nome do dia da semana e a data formatada
        let formattedDate = `${date.getDate()}`;
    
        let dayText = document.getElementById(`dayT${i}`);
        dayText.innerHTML = `${formattedDate}`;
    }

}