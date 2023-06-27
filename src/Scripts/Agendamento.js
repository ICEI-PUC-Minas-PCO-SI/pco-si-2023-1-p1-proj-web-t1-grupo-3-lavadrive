//Altera a descrição de acordo com o tipo de limpeza
function limpeza(button) {
    let Title = document.getElementById("limpTitle");
    let Desc = document.getElementById("limpDesc");

    if (button == 1) {
        Title.textContent = "Ducha";
        Desc.textContent = "Ducha refrescante, ideal para uma rápida remoção de sujeira superficial e uma sensação renovadora.";
        tipoDeLimpeza = "Ducha";
    }
    else if (button == 2) {
        Title.textContent = "Limpeza Normal";
        Desc.textContent = "Uma higienização mais detalhada e cuidadosa, garantindo um carro impecável.";
        tipoDeLimpeza = "Limpeza Normal";
    }
    else if (button == 3) {
        Title.textContent = "Limpeza Completa";
        Desc.textContent = "Tratamento minucioso que abrange desde a lavagem externa até a higienização interna, deixando seu veículo como novo.";
        tipoDeLimpeza = "Limpeza Completa";
    }
    else if (button == 4) {
        Title.textContent = "Polimento e Enceramento";
        Desc.textContent = "Aplicação de uma camada de cera protetora na pintura do veículo e remoção de imperfeições, deixando o veículo com um aspecto mais brilhante e renovado."
        tipoDeLimpeza = "Polimento e Enceramento";
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
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Outubro', 'Novembro', 'Setembro', 'Dezembro'];

    //Define no calendario o mes
    document.getElementById('mes').textContent = meses[new Date(diaInicial).getMonth()];

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


//Definir dados do agendamento

let dia;
let tipoDeLimpeza = "Limpeza Normal";
let hora;

//Define o dia do agendamento
function definirdia(entrada) {
    dia = document.getElementById("dayT" + entrada).textContent;
}

//Define a hora do agendamento
function definirhora(entrada) {
    hora = entrada + ":00h";
}

//Salva o agendamento e envia para a tela inicial
function finalizar() {
    let dataAtual = new Date();

    dataDoAgendamento = dia + "/" + (dataAtual.getMonth() + 1) + "/" + dataAtual.getFullYear();

    placaDoAgendamento = document.getElementById("inputPlaca").value;
    categoriaDoAgendamento = document.getElementById("inputcategoria").value;
    responsavelDoAgendamento = document.getElementById("inputNomeReal").value;

    let novoAgendamento = {
        "tipoDeLimpeza": tipoDeLimpeza,
        "data": dataDoAgendamento,
        "hora": hora,
        "placa": placaDoAgendamento,
        "categoria": categoriaDoAgendamento,
        "responsavel": responsavelDoAgendamento,
    }

    fetch("https://api-avaliacao.vercel.app/agendamentos", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoAgendamento),
    }).then(response => response.json())
        .then(data => console.log(data))
}


