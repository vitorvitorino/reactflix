import Hero from "./Hero";

const HomeView = () => {
  return (
    <>
      <Hero text="ReactFlix" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
            Bem-vindo ao ReactFlix! 🎬
            <br></br>

  <p>Desenvolvido durante a minha formação Fullstack, o ReactFlix é um pequeno  projetinho que é o resultado dos meus primeiros contatos com React. O site oferece uma experiência bem dinâmica e fluida, sem a necessidade de carregar páginas, e também bastante informação graças tanto ao React e também à completissíma API do TMDB.</p>

<p>Aqui estão algumas das funcionalidades que eu achei mais interessantes quando estava desenvolvendo o projeto: </p>

<p>1. 🔍 Pesquisa em Tempo Real: O site já começa a te mostrar os resultados da pesquisa quando você digita a primeira letra, por exemplo: ao digitar a letra 'S', já vão ser exibidos todos os filmes que começam com essa letra dentro da API da TMDB. Conforme você vai digitando, o resultados vai se refinando, até que seja mostrado o filme que você queria.</p>

<p>2. 🎞 Visualização Amigável: Esse projeto também é feito com Bootstrap5 e eu usei o template dos cards que se encontra na documentação. A ideia foi (além de me familiarizar mais com o BS5 com mais um projeto) poder usufruir das features e da praticidade que o Bootstrap oferece (incluindo o pensamento mobile-first).  Os cards exibem o poster, o nome e também um botão de 'Detalhes'. Ao clicar, a pagina mostra a nota média, quantidade de votos e um link direto para a página do filme no IMDB.</p>

<p>Esse projeto certamente foi um pequeno desafio para mim, principalmente por ser meu primeiro contato real com React, mas sinto que consegui me aproximar mais da linguagem e pude ver de perto o potencial que ela oferece (nunca imaginei que um site pudesse ser dinamico dessa maneira).</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeView;
