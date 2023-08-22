import Style from  "./css/itens.module.css"
function Itens(props) {
    return (
        <div className={Style.tudo}>
          <img src={props.img} alt={props.alt} />
          <div className="escrita">
              <h5>{props.titulo}</h5>
              <p>{props.descricao}</p>
          </div>
        </div>
    );
  }
  
  export default Itens;