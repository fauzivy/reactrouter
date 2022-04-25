import React, { useState } from "react";
const questions = ["Do you tend to be happy when being in a crowd?",
                    "Do you tend to observe things only without meddling feelings?",
                    "Do you feel hard to feel emphatetic?",
                    "Do you love to plan and stick to it in daily basis?"
                    ]

let mbti = []



function Home(){
    const [show, setShow] = useState(false);
    function drop(param){
        mbti.push(param);
        console.log(mbti)
    }
    return(
        <div style={{ position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}}>
            <div>
                {questions[0]}
                <button onClick={()=>drop("E")}>Yes</button>
                <button onClick={()=>drop("I")}>No</button>
                
            </div>
            <div>
                {questions[1]}
                <button onClick={()=>drop("S")}>Yes</button>
                <button onClick={()=>drop("N")}>No</button>
            </div>
            <div>
                {questions[2]}
                <button onClick={()=>drop("T")}>Yes</button>
                <button onClick={()=>drop("F")}>No</button>
            </div>
            <div>
                {questions[3]}
                <button onClick={()=>drop("J")}>Yes</button>
                <button onClick={()=>drop("P")}>No</button>
            </div>  

            <div>
                {show ? <div><h1>{mbti[0] + mbti[1] + mbti[2] + mbti[3]} {mbti = []}</h1></div>:null}
                <button onClick={()=>setShow(true)}>RESULTS</button>
            </div>  
        </div>
    )   
}

export default Home;