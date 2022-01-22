import React, { useState } from "react";

import "./styles.css";

const FeedBack = () => {

  const [triggeredLike, setTriggeredLike] = useState(false);
  const [triggeredDeslike, setTriggeredDeslike] = useState(false);
  
  function handleFeedBackClick(props, switchCase) {

    if (props === "like") {
      switchCase === triggeredLike?setTriggeredLike(!triggeredLike):setTriggeredLike(switchCase)
      if (triggeredLike === false){setTriggeredDeslike(false)}
    }
    else { switchCase === triggeredDeslike?setTriggeredDeslike(!triggeredDeslike):setTriggeredDeslike(switchCase)
      if (triggeredDeslike === false){setTriggeredLike(false)}
    }
  }

  return (
    <div className="feedBack-container">
      <div className="feedBack-buttons">
        <button className={triggeredLike ? "feedBack-like-button selected" : "feedBack-like-button"} onClick={()=> handleFeedBackClick("like", true)}>Gostei</button>  
        <button className={triggeredDeslike ? "feedBack-deslike-button selected" : "feedBack-deslike-button"} onClick={()=> handleFeedBackClick("deslike", true)}>Não Gostei</button>    
      </div>
    </div>     

  );
};

export default FeedBack;
