const meuUsuario = document.getElementById('meuUsuario');
const minhaSenha = document.getElementById('minhaSenha');
const btnEntrar = document.getElementById('entrar');

btnEntrar.addEventListener('click', function(){
    const valueMeuUsario = meuUsuario.value;
    const valueMinhaSenha = minhaSenha.value;

    if (valueMeuUsario === '' && valueMinhaSenha === ''){
        window.alert("Campos vazios")
    }
})