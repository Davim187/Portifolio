import { Card_projetos } from "../../components/cards_projetos";
import { projetos } from "../../utils/utilsObjects"
import { Div, Content, Tag } from "./style";

export function Projeto_page() {
  return (
    <Div>
      <Content>
        <Tag>Projetos:</Tag>
        <div>
          <Card_projetos data={projetos} />
        </div>
      </Content>
    </Div>
  );
}
