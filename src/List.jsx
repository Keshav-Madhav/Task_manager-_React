import React, { useState } from "react";
import Task from "./Task";

const List=({listData,handleListData})=>{

    const removeHandler=(key)=>{
        handleListData(listData.filter(obj=>obj!=key))
    }

    return(
        <ul>
            <button onClick={()=>{handleListData([])}}>remove all</button>
            {listData.map((elem)=>(<Task text={elem} remove={removeHandler} key={elem} elem={elem} />))}
        </ul>
    )

}

export default List