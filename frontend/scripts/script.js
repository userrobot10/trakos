const meuUsuario = document.getElementById('meuUsuario');
const minhaSenha = document.getElementById('minhaSenha');
const btnEntrar = document.getElementById('entrar');

btnEntrar.addEventListener('click', function(){
    event.preventDefault()
    const valueMeuUsario = meuUsuario.value;
    const valueMinhaSenha = minhaSenha.value;

    if (valueMeuUsario === '' && valueMinhaSenha === ''){
        window.alert("Campos vazios")
    }
})