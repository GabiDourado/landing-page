import InputEbtn from "./InputEbtn";
import Assista from "./assista";
import Style from "./css/rodape.module.css"
import Social from "./social";
function Rodape(props) {
    return (
      <div className={Style.fundo}>
        <div className={Style.risquinho}></div>
        <p className={Style.espaco}>Atualmente, estou organizando a minha própria campanha de RPG, onde irei mestrar e jogar junto de alguns amigos.!</p>
        <p>Quer saber mais?</p>
        <p>Insira seu Email para receber atualisações do site, dicas e muito mais!</p>
        <InputEbtn tipo="email" placeholder="Email"/>
        <Social insta="gabizita.1234" instagram="@gabizita.1234" twitter="Gabs_Dou" twitteer="@Gabs_Dou" tiktok="@gabi_dourado" tel="(14)999003069" email="gabi.dourados2xd@gmail.com"/>
        <p className={Style.espaco} >Quer Assistir?</p>
        <Assista/>
      </div>
    );
  }
  
  export default Rodape;