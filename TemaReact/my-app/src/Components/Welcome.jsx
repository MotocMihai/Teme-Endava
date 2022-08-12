import React from "react";
import {useState} from "react";
import {Input} from "@material-ui/core";

export const Welcome=({name})=>{

    const [value, setValue] = useState();

  const handleChangeInput = (event) => {
      setValue(event.target.value);
  };
    return (
        <div>
            <h1> Welcome {value}</h1>
            <Input onChange={handleChangeInput}/>
        </div>
        
    )

}