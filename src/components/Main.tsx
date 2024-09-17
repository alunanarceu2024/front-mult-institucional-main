import React from "react";
import "./Main.css";

const Main: React.FC = () => {
  return (
    <main className="main-content">
      <div className="background-image"/>
      <div className="content">
        <h1>Bem-vindo ao universo do chocolate, onde cada pedaço é uma deliciosa viagem</h1>
        <p>Oferecemos chocolates artesanais feitos com ingredientes de alta qualidade e técnicas refinadas, transformando cada pedaço em uma experiência de sabor e prazer únicos.</p>
        <button className="cta-button">Descubra os nossos produtos</button>
      </div>
    </main>
  );
};

export default Main;
