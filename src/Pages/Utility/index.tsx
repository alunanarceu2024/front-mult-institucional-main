import Header from "../../components/Header";
import MainCard from "../../components/MainCard";
import Card from "../../components/Card";
import { IHeaderProps } from "../../interfaces";
import { UtilityService } from "../../helpers/Services/UtilityService";
import { useEffect, useState } from "react";


const utilityService = new UtilityService();

const Utility = ({ isOpen, setIsOpen, onClose }: IHeaderProps) => {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    utilityService.getAll().then((response) => {
      setCards(response.data);
    });
  });
  
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} />
      <MainCard>
        {cards.map((element) => {
          return <Card content={element} />;
        })}
      </MainCard>
    </>
  );
};

export default Utility;