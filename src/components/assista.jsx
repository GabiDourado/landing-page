import Style from "./css/social.module.css"
function Assista(props) {
    return (
      <div>
        <p>Assista Ordem Paranormal em: <a className={Style.soci} href="https://www.youtube.com/@OrdemParanormal">Vídeos no Youtube</a> ou <a className={Style.soci} href="https://www.twitch.tv/cellbit/videos">Vods na Twitch</a></p>
        <p>Assista Turma B em: <a className={Style.soci} href="https://www.youtube.com/playlist?list=PLqBU5ZNOE3pOEOzoY_HjtC_fwAlG6kgL8">Vídeos no Youtube</a> ou <a className={Style.soci} href="https://www.twitch.tv/d20minutinhos">Vods na Twitch</a></p>
        <p>Assista Yousong Zone em: <a className={Style.soci} href="https://www.youtube.com/playlist?list=PLqBU5ZNOE3pNXIzeZC7qFdsy080rHWahw">Vídeos no Youtube</a> ou <a className={Style.soci} href="https://www.twitch.tv/d20minutinhos">Vods na Twitch</a></p>
        <p className={Style.baixo}>Assista Obscuro Infinito em: <a className={Style.soci} href="https://www.youtube.com/playlist?list=PLb6YocZR3EBxxOk3ATQ9thTm_plkQEYAK">Vídeos no Youtube</a> ou <a className={Style.soci} href="https://www.twitch.tv/ggtonho/videos">Vods na Twitch</a></p>
      </div>
    );
  }
  
  export default Assista;