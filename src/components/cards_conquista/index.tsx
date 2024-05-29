import { Div, DivCards, InnerDiv } from "./style"; // Importe o InnerDiv do arquivo de estilo
import { IconType } from "react-icons";

interface Habilidade {
  nameCard: string;
  svg: IconType;
}

interface CardsConquistaProps {
  data: Habilidade[];
}

export function Cards_conquista({ data }: CardsConquistaProps) {
  console.log(data);
  return (
    <Div>
      <InnerDiv>
        {data.map((habilidade: Habilidade, index: number) => {
          const IconComponent = habilidade.svg;
          return (
            <DivCards key={index}>
              <IconComponent />
              <h1>{habilidade.nameCard}</h1>
            </DivCards>
          );
        })}
      </InnerDiv>
    </Div>
  );
}
