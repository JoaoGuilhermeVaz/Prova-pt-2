let usuarios = [];

function adicionarUsuario(nome, idade, email) {

    if (!nome || !idade || !email) {
        console.log("Erro: Todos os campos devem ser preenchidos.");
        return;
    }
    
    if (idade <= 0) {
        console.log("Erro: A idade deve ser maior que 0.");
        return;
    }

    let usuario = {
        nome: nome,
        idade: idade,
        email: email
    };

    usuarios.push(usuario);
    console.log("Usuário adicionado com sucesso.");
}

function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
    } else {
        console.log("Lista de usuários cadastrados:");
        usuarios.forEach((usuario, index) => {
            console.log(`${index + 1}. Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`);
        });
    }
}

adicionarUsuario("João", 25, "joao@exemplo.com");
adicionarUsuario("Maria", 30, "maria@exemplo.com");

listarUsuarios();