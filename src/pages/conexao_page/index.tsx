import { Cards_Contatos } from "../../components/cards_conexao";
import { conexao } from "../../utils/utilsObjects";
import { Div, Tag } from "./style";


export function Conezao_page() {
  return (
    <Div>
    <Tag>Conexão:</Tag>
    <div>
    <Cards_Contatos data={conexao}/>
    </div>
  </Div>
  );
}
