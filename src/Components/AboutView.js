import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="Sobre mim" />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-9 my-5">
            <img className="img-fluid rounded shadow" src='https://avatars.githubusercontent.com/u/100304368?v=4' alt="..." />
              <button className="btn btn-primary mt-4">
              <a class="text-white" href="https://github.com/vitorvitorino"><i className="fab fa-github"></i> Github</a>
            </button>
          </div>
          <div className="col-lg-6 col-md-3 my-5">
            <p className="lead">
              Para falar a verdade, antes essa página se chamava apenas About e não tinha nada de mais, a sua intenção era testar a funcionalidade do 'react-router-dom' e me dar uma cobaia para que eu pudesse ir aprendendo a utilizar Link, Switch/Routes e Route na App.js, entretanto, como tudo deu certo e eu não queria deixar essa página com um lorem genérico, eu vou falar um pouco sobre mim. 
            </p>
            <p className="lead">
              Meu nome é Vitor Vitorino, tenho 26 anos e atualmente tenho o sonho de me tornar um desenvolvedor web. Meu primeiro contato com a programação ocorreu brevemente em 2022 quando estava na reta final do meu curso de Nutrição na UFRN e foi o suficiente para me deixar interessado, com vontade de ir atrás. No começo desse ano, participei do programa Desenvolve 2023, do Boticário, tive a oportunidade de aprofundar meus conhecimentos com o pouco tempo livre que tinha e durante esse período, estabeleci o desenvolvimento web como uma prioridade para mim. Agora, estou correndo atrás de alcançar essa meta. Espero que esse projeto seja o primeiro de muitos outros que virão!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
