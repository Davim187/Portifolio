import "./App.css";
import { Conquista_page } from "./pages/conquistas_page";
import { Projeto_page } from "./pages/projeto_page";
import { Home_page } from "./pages/home_page";
import { Sobre_page } from "./pages/sobre_page";
import { Conezao_page } from "./pages/conexao_page";


function App() {
  return (
    <>
      <Home_page/>
      <Sobre_page/>
      <Conquista_page/>
      <Projeto_page/>
      <Conezao_page/>
    </>
  );
}

export default App;
