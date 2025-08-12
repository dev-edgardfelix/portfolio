function enviarWhats(event){
    event.preventDefault();

    const nome = window.document.querySelector('#nome').value;
    const mensagem = window.document.querySelector('#mensagem').value;
    const telefone = '5511967873507'

    const texto = `Olá! me chamo ${nome}.  ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, '_blank');
}