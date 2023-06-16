//Usuario

//Le os cadastros salvos localmente
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

var imagem;

//Salva od dados do cadastro
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
            usuarios.cadastrados = usuarios.cadastros.length;

            const novoUsuario = {
                id: usuarios.cadastrados--,
                imagem: imagem,
                usuario: nomeUsuario,
                nome: nomeReal,
                email: email,
                senha: senha,
                telefone: telefone,
                termos: termos,
                manterConectado: "nc",
                carro: [{
                    categoria: "nc",
                    modelo: "nc",
                    placa: "nc",
                    cor: "nc",
                }]

            };

            usuarios.cadastros.push(novoUsuario)
            usuarios.cadastrados = usuarios.cadastros.length;

            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            window.location.href = "CadastroCarro.html"
        }
    }

}

//acionado quando na pagina de cadastro de usuario
function eventPagDeCDUsuario(){
    //Detecta alterações no input da imagem
    const inputElement = document.getElementById('inputImagem');
    
    inputElement.addEventListener('change', (event) => {
        const file = event.target.files[0];
    
        convertImageToBase64(file, (base64Image) => {
           // console.log(base64Image);
            imagem = base64Image
            document.getElementById("imgPerfil").src = `data:image/png;base64,${imagem}`
            document.getElementById("imgPerfil").style = `max-width: 170px;`
        });
    });
}

//Converte a imagem para texto (base64) para permitir salvar no json
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

function inserirDadosBase(usuarios){
    //var usuarios = localStorage.getItem('usuarios')

    const novoUsuario = {
        cadastrados: 1,
        usuarioAtual: "nc",
        cadastros: [
            {
                id: 0,
                imagem: "img/lavaDriveLogo.png",
                usuario: "Administrador",
                nome: "LavaDriveADM",
                email: "lavadrive@gmail.com",
                senha: "ADM27742",
                telefone: "(31) 3392-1187",
                termos: "true",
                manterConectado: "true",
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

    return usuarios;
}

//Veiculo

//Detecta a conta atual
function SalvarCarro(){
   let usuarios = lerCadastrosSalvos()

   let corInput = document.getElementById("inputcor").value
   let placaInput = document.getElementById("inputplaca").value
   let modeloInput = document.getElementById("inputmodelo").value
   let categInput = document.getElementById("inputcategoria").value

   if(modeloInput == " " || corInput == " " || placaInput == " " || categInput == "nc"){
    const toastLiveExample = document.getElementById('liveToast')
        document.getElementById('toastMensage').textContent = "Para cadastrar um veiculo preencha todos os campos"
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()
   }
   else{
       for(let i = 0; i < usuarios.cadastros.length;i++){
        if(usuarios.cadastros[i].id = usuarioAtual){
            
            let carroEmCadastro = usuarios.cadastros[i].carro.length

            let carroInf = usuarios.cadastros[i].carro[carroEmCadastro]
    
            carroInf.categoria = categInput
            carroInf.modelo = modeloInput
            carroInf.placa = placaInput
            carroInf.cor = corInput
        }
       }
   }

}


