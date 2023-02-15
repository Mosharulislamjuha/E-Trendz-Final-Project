import React from 'react';

const SuccessReg = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid black"}}>
           <div>
               <h1>Success!</h1>
               <p>Your registration process succeed please go to you profile</p>
               <a href={"/me"}>Go to profile</a>
           </div>
        </div>
    );
};
export default SuccessReg;