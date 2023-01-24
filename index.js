document.getElementById('mensagem').onclick = function(){
    swal( 
       {
        icon: 'info',
        title: 'Seja bem vindo!...',
        text: 'Esta página foi programada por Gabriel Corrêa Aielo. As suas informações bem como o layout da página são constantemente atualizadas. Você pode acessar individualmente cada projeto na aba engenharia ou na aba programação, basta clicar no botão que você será redirecionado. Caso houver algum problema com a sua navegação, por favor informar ao proprietário :)  ',
        footer: '<a href="">Why do I have this issue?</a>'
       }
    )
};

document.getElementById('mensagemerro').onclick = function(){
   Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
 };


