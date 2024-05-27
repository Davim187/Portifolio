import { Background_page } from "../../components/background_page";
import img from "../../assets/img.png";
import { DivLeft, DivRight, Div, TextContainer } from "./style";
import { NavDots } from "../../components/navDots";
import { NavBar } from "../../components/navBar";

export function Home_page() {
  return (
    <Background_page>
      <NavBar />
      <NavDots />
      <Div>
        <DivRight>
          <TextContainer>
            <h1>Olá, meu nome é</h1>
            <h2> Davi Morais!</h2>
          </TextContainer>
        </DivRight>
        <DivLeft>
          <img src={img} alt="Overlay" />
        </DivLeft>
      </Div>
    </Background_page>
  );
}
