import Style from  "./css/direita.module.css"
function ConteudoDireita(props) {
    return (
      <div className={Style.div}>
        <div className={Style.descricoes}>
            <h4>{props.tit}</h4>
            <p>{props.explicacao}</p>
        </div>
        <div className={Style.voltaFoto}>
            <img src={props.foto} alt={props.alt} />
        </div>
      </div>
    );
  }
  
  export default ConteudoDireita;