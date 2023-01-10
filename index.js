document.getElementById('mensagem').onclick = function(){
    swal( 
       {
        icon: 'info',
        title: 'Seja bem vindo!...',
        text: 'Esta página foi programada por Gabriel Corrêa Aielo. As suas informações bem como o layout da página são constantemente atualizadas. Infelizmente, no momento não é possível ainda acessar indivudualmente cada página de projetos da seção "Projetos Programação". Entretanto as medidas cabíveis estão sendo tomadas. Caso houver algum problema com a sua navegação, por favor informar o dono :)  ',
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


