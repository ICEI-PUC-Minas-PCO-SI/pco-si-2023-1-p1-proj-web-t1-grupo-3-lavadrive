//Altera a descrição de acordo com o tipo de limpeza
function limpeza(button) {
    let Title = document.getElementById("limpTitle");
    let Desc = document.getElementById("limpDesc");

    if (button == 1) {
        Title.textContent = "Limpeza Rapida";
        Desc.textContent ="Limpeza nas maquinas com enxague automatico, pinheiro aromatico";
    }
    else if(button ==2){
        Title.textContent = "Limpeza Normal";
        Desc.textContent ="Limpeza nas maquinas com enxague automatico, Pinheiro aromatico, Aspiração completa, Hidratação do banco e Pretinho no pneu";
    }
    else{
        Title.textContent = "Limpeza Completa";
        Desc.textContent ="Limpeza nas maquinas com enxague automatico, Pinheiro aromatico, Aspiração completa e Pretinho no pneu";
    }
}

//Altera o valor pra saber se a opção de pagamento adiantado esta ativa ou não
var pagAdiantado;

function pagarAdiantado(){
    pagAdiantado = !pagAdiantado;
}

//Caso a opção de pagamento adiantado estaja ativa envia para a tela de pagamento
function finalizar(){
    if(pagAdiantado == true){
        window.location.href = "Pagamento.html";
    }
}