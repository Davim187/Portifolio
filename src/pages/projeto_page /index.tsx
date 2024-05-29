import { Card_projetos } from "../../components/cards_projetos";
import { projetos } from "../../utils /utilsObjects";
import { Div ,Tag} from "./style";

export function Projeto_page() {
  return (
    <Div>
       <Tag>Projetos:</Tag>
        <div>
        <Card_projetos data={projetos}/>
        </div>
    </Div>
  );
}
