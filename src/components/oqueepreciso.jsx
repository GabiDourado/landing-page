import Style from  "./css/oqueepreciso.module.css";
import Itens from "./itens-inicio";
import Dado from"./css/img/dado.png";
import Livro from"./css/img/livro.png";
import Pessoas from"./css/img/pessoas.png";

function OqueEPreciso(props) {
    return (
      <div className={Style.div}>
        <h3>O que é preciso para jogar?</h3>
        <div className={Style.flex}>
          <Itens img={Dado} alt="Dado" titulo="Dados" descricao="É um jogo baseado em sorte, que a mesma é tirada a partir de diferentes dados."/>
          <Itens img={Livro} alt="livro" titulo="Escolher um Sistema" descricao="Escolher um sistema é importante para ter uma base de regras e como jogar, mas a imaginação também é fonte de novas regras e histórias."/>
          <Itens img={Pessoas} alt="pessoas" titulo="Outros Players" descricao="Jogar sozinho não é impossível, mas irá se divertir muito mais se tiver companhia para suas aventuras."/>        
        </div>       
      </div>
    );
  }
  
  export default OqueEPreciso;