import { Button } from "../../components/button";
import { Div } from "./style";

export function Sobre_page() {
  return (
    <Div>
      <h1>Sobre:</h1>
      <h3>
        Minha trajetória iníciou com o certificado de Técnico em Redes de
        Computadores no estado do Ceará. Especialização não foi aplicado, mas
        com ela conseguir ingressar na area da TI, com conhecimentos para
        Front-end e Back-end. Cursando Análise e Desenvolvimento de Sistemas no
        Centro Universitário Ateneu. Tenho interesse em aprender novas
        tecnologias e criar soluções inovadoras para os desafios do mercado.
        Desde março de 2023, trabalho como desenvolvedor e suporte na empresa
        Tijuca Alimentos, presto suporte ao sistema e desenvolvo projetos de
        interface de programação de aplicativos (API) Node.js, e aplicações
        usando o React. Antes disso, fiz um estágio de quatro meses na mesma
        empresa, onde participei de quatro projetos de desenvolvimento web,
        sendo reconhecido pela qualidade e agilidade do meu trabalho.
      </h3>
      <Button
        nameButton="Curriculo"
        target="_blank"
        onClick={() =>
          (window.document.location =
            "https://drive.google.com/file/d/1F_A3rHqk4JDfUIkEaxKuUVXH73rNzcvE/view?usp=sharing")
        }
      />
    </Div>
  );
}
