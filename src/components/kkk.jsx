import React, { useState } from "react";

import "./styles.css";

const FeedBack = () => {

  const [triggeredLike, setTriggeredLike] = useState(false);
  const [triggeredDeslike, setTriggeredDeslike] = useState(false);
  
  function handleFeedBackClick(props, filter) {

    if (props === "like") {
      filter === triggeredLike?setTriggeredLike(!triggeredLike):setTriggeredLike(filter)
      if (triggeredLike === false){setTriggeredDeslike(false)}
    }
    else { filter === triggeredDeslike?setTriggeredDeslike(!triggeredDeslike):setTriggeredDeslike(filter)
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
