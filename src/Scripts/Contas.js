
function lerCadastrosSalvos() {
    var usuarios = localStorage.getItem('usuarios')

    if (usuarios != null) {
        usuarios = JSON.parse(usuarios)
    }
    else {
        const novoUsuario = {
            cadastros: [
                {

                    imagem: "img/lavaDriveLogo.png",
                    usuario: "Administrador",
                    nome: "LavaDriveADM",
                    email: "lavadrive@gmail.com",
                    senha: "ADM27742",
                    telefone: "(31) 3392-1187",
                    termos: "true",
                    carro: [{
                        categoria: "nc",
                        modelo: "nc",
                        placa: "nc",
                        cor: "nc",
                    }]

                }
            ]
        }

        usuarios = novoUsuario;

    }
    return usuarios
}


var imagem;

//salva od dados do cadastro
function salvarCadastro() {

    let nomeReal = document.getElementById("InputNomeReal").value
    let email = document.getElementById("InputEmail").value
    let senha = document.getElementById("InputSenha").value
    let telefone = document.getElementById("InputNumero").value
    let nomeUsuario = document.getElementById("InputNomeUsuario").value
    let termos = document.getElementById("CheckTermos").checked

    if (nomeReal == "" || email == "" || senha == "" || telefone == "" || nomeUsuario == "") {
        const toastLiveExample = document.getElementById('liveToast')
        document.getElementById('toastMensage').textContent = "Para se cadastrar preencha todos os campos"
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()
    }
    else {
        if (termos == false) {
            const toastLiveExample = document.getElementById('liveToast')
            document.getElementById('toastMensage').textContent = "Para se cadastrar aceite os termos de privacidade"
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
            toastBootstrap.show()
        }
        else {
            var usuarios = lerCadastrosSalvos()

            const novoUsuario = {

                imagem: imagem,
                usuario: nomeUsuario,
                nome: nomeReal,
                email: email,
                senha: senha,
                telefone: telefone,
                termos: termos,
                carro: [{
                    categoria: "nc",
                    modelo: "nc",
                    placa: "nc",
                    cor: "nc",
                }]

            };

            usuarios.cadastros.push(novoUsuario)

            localStorage.setItem('usuarios', JSON.stringify(usuarios));
        }
    }

}



//detecta alterações no input da imagem
const inputElement = document.getElementById('inputImagem');

inputElement.addEventListener('change', (event) => {
    const file = event.target.files[0];

    convertImageToBase64(file, (base64Image) => {
        console.log(base64Image);
        imagem = base64Image
    });
});

//converte a imagem para texto (base64) para permitir salvar no json
function convertImageToBase64(file, callback) {
    const reader = new FileReader();

    reader.onload = function (event) {
        const img = new Image();

        img.onload = function () {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            const dataURL = canvas.toDataURL('image/png');
            const base64Image = dataURL.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');

            callback(base64Image);
        };

        img.src = event.target.result;
    };

    reader.readAsDataURL(file);
}

