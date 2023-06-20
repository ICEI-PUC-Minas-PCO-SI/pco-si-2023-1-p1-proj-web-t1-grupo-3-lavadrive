function lerCadastrosSalvos() {
    var usuarios = localStorage.getItem('usuarios')

    if (usuarios != null) {
        usuarios = JSON.parse(usuarios)
    }
    else {
        usuarios = inserirDadosBase(usuarios)
    }
    return usuarios
}

function opcoes(op) {
    var tela = document.getElementById("tela");

    if (op == 1) {
        tela.innerHTML = `                
        <div class="mt-2 text-center rounded-circle">
        <img id="perfilImage" class="rounded-circle" src="img/circulo cinza.png" alt="perfil"
            style="width: 30%;">
        <p><i class="fa-solid fa-pencil"></i> Editar foto de perfil</p>
        <input type="file" id="inputImagem" accept="image/*" style="width: 54%;">
    </div>

    <div class="d-flex justify-content-center my-3">
        <input id="perfilInputNome" class="form-control text-center border-secondary" type="search"
            placeholder="Nome" aria-label="Search" style="width: 20rem;">
    </div>

    <div class="d-flex justify-content-center my-3">
        <input id="perfilInputUsuario" class="form-control text-center border-secondary" type="search"
            placeholder="Nome de Usuario" aria-label="Search" style="width: 20rem;">
    </div>

    <div class="d-flex justify-content-center my-3">
        <input id="perfilInputEmail" class="form-control text-center border-secondary" type="search"
            placeholder="E-mail" aria-label="Search" style="width: 20rem;">
    </div>

    <div class="d-flex justify-content-center my-3">
        <input id="perfilInputTelefone" class="form-control text-center border-secondary" type="search"
            placeholder="Telefone" aria-label="Search" style="width: 20rem;">
    </div>

    <div class="d-flex justify-content-center my-3">
        <input type="radio" class="btn-check" name="options" id="trocarSenha" autocomplete="off">
        <label class="btn btn-light border mt-4 me-3" for="trocarSenha"
            onclick="window.location.href = 'TrocarSenha.html'" style="width: 8rem;">Trocar
            senha</label>

        <button type="radio" class="btn btn-light border mt-4 ms-3" name="options" id="salvar"
            style="width: 8rem;" onclick="salvarAlteracoes()">Salvar</button>
        <button type="radio" onclick="sair()" class="btn btn-outline-danger border mt-4 ms-3" name="options" id="logoff"
            style="width: 8rem;">Sair</button>

            <!-- Modal de deletar a conta -->
        <button type="button" class="btn btn-danger border mt-4 ms-3" data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">
            Excluir conta
        </button>

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Você deseja excluir sua conta?</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Esteja ciente que esta ação é permanente e irreversível.
                    </div>
                    <div class="modal-footer">
                        <button type="button" onclick="deletar()" class="btn btn-danger">Sim</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Não</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
        dadosPerfil();
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
}

function dadosPerfil() {
    let usuarios = lerCadastrosSalvos();

    document.getElementById("perfilInputNome").value = usuarios.cadastros[usuarios.usuarioAtual].nome;
    document.getElementById("perfilInputUsuario").value = usuarios.cadastros[usuarios.usuarioAtual].usuario;
    document.getElementById("perfilInputEmail").value = usuarios.cadastros[usuarios.usuarioAtual].email;
    document.getElementById("perfilInputTelefone").value = usuarios.cadastros[usuarios.usuarioAtual].telefone;

    if (usuarios.cadastros[usuarios.usuarioAtual].imagem != "nc") {
        document.getElementById("perfilImage").src = `${usuarios.cadastros[usuarios.usuarioAtual].imagem}`
        document.getElementById("perfilImage").style = `width: 170px; height: 170px;`
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
        text = conteudo.charAt(0) + "/" + conteudo.charAt(1);
        num.value = text;
    }
    if (conteudo.length == 4) {
        text = conteudo.charAt(0) + conteudo.charAt(2) + "/" + conteudo.charAt(3) + conteudo.charAt(4);
        num.value = text;
    }
    if (conteudo.length == 5) {
        text = conteudo.charAt(0) + conteudo.charAt(1) + "/" + conteudo.charAt(3) + conteudo.charAt(4) + "/";
        num.value = text;
    }
    if (conteudo.length > 5) {
        text = conteudo.charAt(0) + conteudo.charAt(1) + "/" + conteudo.charAt(3) + conteudo.charAt(4) + "/" + conteudo.substring(6);
        num.value = text;
    }

}