import Style from "./css/input.module.css"
function Sucesso(){
    alert("Email Enviado Com Sucesso!");
}
function InputEbtn(props) {
    return (
      <div className={Style.input}>
        <label>
            <input type={props.tipo} placeholder={props.placeholder} />
        </label>
        <button onClick={Sucesso}>Enviar</button>
      </div>
    );
  }
  
  export default InputEbtn;