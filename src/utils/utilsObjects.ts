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

import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

interface Habilidade {
  nameCard: string;
  svg: IconType;
}

interface Conexao {
  nameCard: string;
  svg: IconType;
  descriptionCard:string
  link:string
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

export const conexao: Conexao[] = [
  { nameCard: "Github", svg: FaGithub, link: "https://github.com/Davim187",descriptionCard:'@Davim187' },
  { nameCard: "Linkedin", svg: CiLinkedin, link: "https://www.linkedin.com/in/davi-morais-46680b23a/",descriptionCard:'Davi Morais'},
  { nameCard: "Email", svg: MdEmail, link: "mailto:daviimorais39@gmail.com",descriptionCard:'daviimorais39@gmail.com' },
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
