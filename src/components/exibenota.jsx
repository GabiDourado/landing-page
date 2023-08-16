function ExibeNota (props){
    function ExibeNota(){
        alert("Sua média é: "+props.nota)
      }
    return(
        <div>
            <h1>{props.mensagem}</h1>
            <button onClick={ExibeNota}>Veja sua Nota</button>
        </div>
    )
}
export default ExibeNota;