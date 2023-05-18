//Altera a descrição de acordo com o tipo de limpeza
function limpeza(button) {
    let Title = document.getElementById("limpTitle");
    let Desc = document.getElementById("limpDesc");

    if (button == 1) {
        Title.textContent = "Limpeza Rapida";
        Desc.textContent = "Limpeza nas maquinas com enxague automatico, pinheiro aromatico";
    }
    else if (button == 2) {
        Title.textContent = "Limpeza Normal";
        Desc.textContent = "Limpeza nas maquinas com enxague automatico, Pinheiro aromatico, Aspiração completa, Hidratação do banco e Pretinho no pneu";
    }
    else {
        Title.textContent = "Limpeza Completa";
        Desc.textContent = "Limpeza nas maquinas com enxague automatico, Pinheiro aromatico, Aspiração completa e Pretinho no pneu";
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

//Detecta os dias da semana
function diasDaSemana() {
    let date = new Date;

    let dayNames = new Array ("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");

    for(let i = 0;i <= 10; i++){
        let dayName = document.getElementById(`dayName${i}`);
        let dayText = document.getElementById(`day${i}`);
    
        let name = date.getDay() + i;
        if(name > 6){
            let aux = name;
            name = 0 + (aux - 7);
        }
        let day = date.getDate();
    
        dayName.innerHTML = `${dayNames[name]}`;
        dayText.innerHTML = `${day + i}`;
    }
}

function diasDS() {
    let date2 = new Date;

    let name2 = date2.getDay();
    let day2 = date2.getDate() - name2;

    for(let i = 0;i < 8; i++){
        let dayText2 = document.getElementById(`dayT${i}`);
    
        if(name2 > 6){
            let aux2 = name2;
            name2 = 0 + (aux2 - 7);
        }
    
        dayText2.innerHTML = `${day2}`;

        name2++;
        day2++;
    }
}