import React from "react";

const Input=({data, handleData, handleList})=>{
    return(
        <>
            <input type="text" value={data} onChange={
                (e)=>handleData(e.target.value)
            }/>

            <button onClick={()=>{
                handleList(prev=>[...prev,data])
                handleData("")
            }}>Enter</button>
        </>
    )
}

export default Input