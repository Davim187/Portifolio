import { Cards_conquista } from "../../components/cards_conquista";
import { Div, Tag } from "./style";
import { habilidades } from "../../utils /utilsObjects";


export function Conquista_page() {
 
  return (
    <>
      <Div>
        <Tag>Habilidades:</Tag>
        <div>
        <Cards_conquista data={habilidades}/>
        </div>
      </Div>
    </>
  );
}
