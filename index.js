const form = document.getElementById('contato_form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nomesobrenome = form.elements['nomesobrenome'].value;
    const email = form.elements['email'].value;
    const mensagem = form.elements['mensagem'].value;
    const telefone = form.elements['telefone'].value;
    
    const result = `Nome: ${nomesobrenome}\nE-mail: ${email}\nMessage: ${mensagem}\ntel: ${telefone}`;
    alert(result);
});