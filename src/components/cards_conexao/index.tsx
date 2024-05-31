import { Div, DivC, DivCards, InnerDiv } from "./style"; // Importe o InnerDiv do arquivo de estilo
import { IconType } from "react-icons";

interface Contatos {
  nameCard: string;
  svg: IconType;
  descriptionCard: string;
  link:any
}

interface CardsContatosProps {
  data: Contatos[];
}

export function Cards_Contatos({ data }: CardsContatosProps) {
  console.log(data);
  return (
    <Div>
      <InnerDiv>
        {data.map((contatos: Contatos, index: number) => {
          const IconComponent = contatos.svg;
          return (
            <DivC onClick={()=> window.location=contatos.link} >
              <DivCards key={index}>
                <IconComponent />
              </DivCards>
              <h1>{contatos.nameCard}</h1>
              <h4>{contatos.descriptionCard}</h4>
            </DivC>
          );
        })}
      </InnerDiv>
    </Div>
  );
}
