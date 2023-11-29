import Mountain1 from "../Assets/5.jpg";
import Mountain2 from "../Assets/6.jpg";
import Mountain3 from "../Assets/10.jpg";
import Mountain4 from "../Assets/11.jpg";
import "./DestinationStyle.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
        
      <h1>popular destination</h1>
      <p>tours gives us enjoyment</p>
      
       <destinationData
        className="first-des"
       
       heading="taal valcona,batangas"
      text="bsrjij ktfdr jrdgh iydrtfghj tfygjk poikuj dfcgvh oiulkhj"
      img1={Mountain1}
      img2={Mountain2}/>
      <DestinationData
      className="first-des-reverse"
       heading="taal valcona,batangas"
      text="bsrjij ktfdr jrdgh iydrtfghj tfygjk poikuj dfcgvh oiulkhj"
      img1={Mountain3}
      img2={Mountain4}
      />
       </div>
       
       
  );
};

export default Destination;