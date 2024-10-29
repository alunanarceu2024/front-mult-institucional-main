
import Main from "../Main";
import "./style.css"
type Props = {
    children: React.ReactNode;
  };

const MainCard = ({children}:Props) => {
  return (
    <Main>
      <div className="main-card">{children}</div>
    </Main>
  );
};

export default MainCard;