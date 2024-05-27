import { Background_page } from "../../components/background_page";
import img from "../../assets/img.png";
import { DivLeft, DivRight, Div,Headers,TextContainer } from "./style";
import { Navbar } from "../../components/navbar";

export function Home_page() {
  return (
    <Background_page>
      <Headers>
        <Navbar/>
      </Headers>
      <Div>
        <DivRight>
        <TextContainer>
        <h1>Portifolio</h1>
        <h2>Olá, meu nome é Davi Morais!</h2>
      </TextContainer>
        </DivRight>
        <DivLeft>
          <img src={img} alt="Overlay" />
        </DivLeft>
      </Div>
    </Background_page>
  );
}
