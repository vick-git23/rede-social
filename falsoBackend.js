function usuariosAtuais(){
    return JSON.parse(localStorage.getItem("usuarios"));
}

function retornaUsuarioLogado(){
    return JSON.parse(localStorage.getItem("usuarioLogado")).nomeUsuario;
}

function pegaNovoId(){
	let usuarios = usuariosAtuais();
	if(!usuarios || !usuarios?.length) return 0;

	return usuarios.length
}

function logar(nomeUsuario, senha){
    const usuarios = usuariosAtuais();
    if(usuarios){
        for(let i=0;i<usuarios.length;i++){
            if(usuarios[i].nomeUsuario === nomeUsuario && usuarios[i].senha === senha){
                return usuarios[i]; // retorna o objeto do usuario que está logado
            }
        }
    }

    return false;
}

function criarUsuario(novoUsuario){
    let usuarios = usuariosAtuais();

    // se nao tem usuarios atuais crie uma lista vazia para guardar eles
    // ou entao se currentUsers nao for uma lista tambem crie uma lista vazia para guardar os usuarios
    if(!usuarios || !usuarios?.length) usuarios = [];

    // Se usuario ja existir retornar FALSE
    for(let i = 0;i<usuarios.length;i++){
        if(usuarios[i].nomeUsuario ===  novoUsuario.nomeUsuario) return false;
    }

    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return true;
}

