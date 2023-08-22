import Style from "./css/apresentacao.module.css"
function Apresentacao(props) {
    return (
      <header className={Style.capa}>
        <div>
            <h1>RPG</h1>
            <h2><a className={Style.letraDif} href="#">R</a>oling <a className={Style.letraDif} href="#">P</a>laying <a className={Style.letraDif} href="#">G</a>ame</h2>
            <h3>O jogo de improviso, interpretação e imaginação </h3>
        </div>
      </header>
    );
  }
  
  export default Apresentacao;