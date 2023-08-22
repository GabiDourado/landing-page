import Style from "./css/social.module.css"
function Social(props) {
    return (
      <div className={Style.social}>
        <p className={Style.espaco}>Entre em contato e me siga em minhas redes sociais!</p>
        <p>Instagram: <a className={Style.soc} href={"https://instagram.com/"+props.insta}>{props.instagram}</a></p>
        <p>Twitter: <a className={Style.soc} href={"https://twitter.com/"+props.twitter}>{props.twitteer}</a></p>
        <p>TikTok:  <a className={Style.soc} href={"https://tiktok.com/"+props.tiktok}>{props.tiktok}</a></p>
        <p>Telefone:<a className={Style.soc} href={"tel:"+props.tel}>{props.tel}</a></p>
        <p>Email:<a className={Style.soc} href={"mailto:"+ props.email}>{props.email}</a></p>
      </div>
    );
  }
  
  export default Social;