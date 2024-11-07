import React from "react";
import Main from "../Main";
import './style.css'

const MainHome: React.FC = () => {
  return (
    <Main>
      <h1>Conheça nossos produtos:</h1>
      <h1 className="h1-home">Bem-vindo ao universo do chocolate, onde cada pedaço é uma deliciosa viagem</h1>
      <p className="p-home">Oferecemos chocolates artesanais feitos com ingredientes de alta qualidade e técnicas refinadas, transformando cada pedaço em uma experiência de sabor e prazer únicos.ya</p>
      <button className="cta-button">Faça o seu pedido</button>
    </Main>
  );
};

export default MainHome;