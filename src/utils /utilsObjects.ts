import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";

import { IconType } from "react-icons";

import HostDev from "../assets/projetos/HostDev.png";
import Mario from "../assets/projetos/Mario.png";
import TabelaAlunos from "../assets/projetos/TabelaAlunos.png";

interface Habilidade {
  nameCard: string;
  svg: IconType;
}

interface Projetos {
  nameCard: string;
  descriptionCard: string;
  svg: string;
  link: string;
}

export const habilidades: Habilidade[] = [
  { nameCard: "HTML5", svg: FaHtml5 },
  { nameCard: "CSS3", svg: FaCss3Alt },
  { nameCard: "JAVASCRIPT", svg: IoLogoJavascript },
  { nameCard: "TYPESCRIPT", svg: SiTypescript },
  { nameCard: "REACT", svg: FaReact },
  { nameCard: "REACT NATIVE", svg: TbBrandReactNative },
  { nameCard: "NODE.JS", svg: FaNodeJs },
];

export const projetos: Projetos[] = [
  {
    nameCard: "HostDev",
    svg: HostDev,
    descriptionCard: "Primeiro pojeto a ser criado com HTML e CSS.",
    link: "https://github.com/Davim187/Mario",
  },
  {
    nameCard: "Tabela Alunos",
    svg: TabelaAlunos,
    descriptionCard: "Projeto com intuito de aprender JavaScript.",
    link: "https://github.com/Davim187/HostDev",
  },
  {
    nameCard: "Jogo do Mario",
    svg: Mario,
    descriptionCard: "Projeto com o intuito de aprimorar o JavaScript.",
    link: "https://github.com/Davim187/Mario",
  },
];
