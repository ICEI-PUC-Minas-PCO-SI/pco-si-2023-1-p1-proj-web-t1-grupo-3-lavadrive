//Altera a descrição de acordo com o tipo de limpeza
function limpeza(button) {
    var Title = document.getElementById("limpTitle");
    var Desc = document.getElementById("limpDesc");

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