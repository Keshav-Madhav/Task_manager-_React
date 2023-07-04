import React from "react";


const Task=({text,elem,remove})=>{
    return(
        <>
            <h1 id={elem} style={{}}>{text}</h1>

            <button onClick={()=>{remove(elem)}}>remove</button>

            <button onClick={()=>{
                const obj=document.getElementById(elem)
                obj.style.textDecoration="line-through"
            }}>done</button>
        </>
    )
}

export default Task