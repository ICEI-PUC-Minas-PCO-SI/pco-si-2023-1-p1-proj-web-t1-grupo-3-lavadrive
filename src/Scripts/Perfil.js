function opcoes(op) {
    var tela = document.getElementById("tela");

    if (op == 1) {
        tela.innerHTML = `                
        <img src="img/circulo cinza.png" style="width: 30%;">

        <div class="d-flex justify-content-center my-3">
            <input class="form-control text-center border-secondary" type="search" placeholder="Nome"
                aria-label="Search" style="width: 20rem;">
        </div>

        <div class="d-flex justify-content-center my-3">
            <input class="form-control text-center border-secondary" type="search" placeholder="Nome de Usuario"
                aria-label="Search" style="width: 20rem;">
        </div>

        <div class="d-flex justify-content-center my-3">
            <input class="form-control text-center border-secondary" type="search" placeholder="E-mail"
                aria-label="Search" style="width: 20rem;">
        </div>

        <div class="d-flex justify-content-center my-3">
            <input class="form-control text-center border-secondary" type="search" placeholder="Telefone"
                aria-label="Search" style="width: 20rem;">
        </div>

        <div class="d-flex justify-content-center my-3">
            <input type="radio" class="btn-check" name="options" id="trocarSenha" autocomplete="off">
            <label class="btn btn-light border mt-4 me-3" for="trocarSenha" style="width: 8rem;">Trocar senha</label>

            <input type="radio" class="btn-check" name="options" id="salvar" autocomplete="off" disabled>
            <label class="btn btn-light border mt-4 ms-3" for="salvar" style="width: 8rem;">Salvar</label>
        </div>`;
    }
    else if (op == 2) {
        tela.innerHTML = `                
        <img src="img/circulo cinza.png" style="width: 30%;">

        <div class="d-flex justify-content-center my-3">
            <input class="form-control text-center border-secondary" type="search" placeholder="Placa do Veiculo"
                aria-label="Search" style="width: 20rem;">
        </div>

        <div class="d-flex justify-content-center my-3">
            <input class="form-control text-center border-secondary" type="search" placeholder="Responsavel pelo Veiculo"
                aria-label="Search" style="width: 20rem;">
        </div>

        <div class="d-flex justify-content-center my-3">
            <input class="form-control text-center border-secondary" type="search" placeholder="Categoria do Veiculo"
                aria-label="Search" style="width: 20rem;">
        </div>

        <div class="d-flex justify-content-center my-3">
            <input type="radio" class="btn-check" name="options" id="salvar" autocomplete="off" disabled>
            <label class="btn btn-light border mt-4 ms-3" for="salvar" style="width: 8rem;">Salvar</label>
        </div>`;
    }
    else if (op == 3) {
        tela.innerHTML = `                
        <h3 class="mt-3">Ultimos Agendamentos</h3>

        <div class="d-flex justify-content-center my-3">
            <input id="filtroData" class="form-control text-center border-secondary" type="search" placeholder="00/00/0000"
                aria-label="Search" style="width: 20rem;" onkeypress="return data(event)" maxlength="10">
        </div>
        
        <div class="justify-content-center my-3 rounded border">
        <h5 class="m-0 my-1">00/00/0000</h5>
        <p class="m-0 my-1">API6527 - Lavagem Rapida</p>
        <p class="m-0 my-1">Avaliação</p>
        </div>`;
    }
    else if (op == 4) {
        tela.innerHTML = `                
        <h3 class="mt-3">Excluir Conta</h3>

        <p class="my-4">Essa ação é irreversivel.</p>

        <button class="btn btn-light border my-4" style="width: 10rem;" type="button">Excluir</button>
        
        `;
    }

}

function data(event) {
    let campoData = document.getElementById("filtroData");

    let entrada = event.which;

    if (entrada < 48 || entrada > 57) {
        return false;
    }

    mascaraData(campoData);
}

function mascaraData(num) {
    let conteudo = num.value;
    let text;

    if (conteudo.length == 2) {
        text = conteudo.charAt(0)+"/" + conteudo.charAt(1);
        num.value = text;
    }
    if (conteudo.length == 4) {
        text = conteudo.charAt(0) + conteudo.charAt(2)+"/" +conteudo.charAt(3) + conteudo.charAt(4);
        num.value = text;
    }
    if (conteudo.length == 5) {
        text = conteudo.charAt(0) + conteudo.charAt(1)+"/" +conteudo.charAt(3) + conteudo.charAt(4) +"/";
        num.value = text;
    }
    if (conteudo.length > 5) {
        text = conteudo.charAt(0) + conteudo.charAt(1)+"/" +conteudo.charAt(3) + conteudo.charAt(4) +"/" + conteudo.substring(6);
        num.value = text;
    }

}