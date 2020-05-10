import React from "react";
import "./winningPage.css";
const WinningPage = (props) => {
  const {restart}=props
  return (
    <div className="WinPage">
      <div className='WinPage-text'>We congratulate <br/>
           you have won
           <div>
           <button onClick={restart} 
                   className="WinPage-button">
                   Play again
            </button>
           </div>
      </div>
      
     
    </div>
  );
};

export default WinningPage;
