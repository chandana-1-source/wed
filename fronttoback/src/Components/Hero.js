import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
      <img alt="heroimg" src={props.heroimg}/>
      <div className="hero-text">
        <h1>your journey</h1>
        <p>how is ur experience</p>
        <a href="{props.url} 
      className={props.btnclass}>
        {props.buttontext}">
      </a>
        
      
     
      </div>
      </div>
    </>
  );
}

export default Hero;