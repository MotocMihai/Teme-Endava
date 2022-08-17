import React from "react";
import {useState} from "react";
import {Input} from "@material-ui/core";


export const Welcome = () => {
    const initialFormData = Object.freeze({
        nume: "",
        prenume: "",
        email:""
      });
      const initialName = Object.freeze({
        nume: "",
        prenume: "",
        email: ""
      });
      
    const [formData, updateFormData] =useState(initialFormData);
    const [name,updateName]=useState(initialName);

    
  
    const handleChange = (e) => {
      updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim()
      });
    };

    
  
    const handleSubmit = (e) => {
       
        updateName({
            ...formData,
          }
          );
          console.log(name);     
    };

  
    return (
      <>
      <br/>
      <div>
            <label>
            Nume
            <input name="nume" onChange={handleChange} />
            </label>
            <br />
            <label>
            Prenume
            <input name="prenume" onChange={handleChange} />
            </label>
            <br />
            <label>
            Email
            <input type= "email" name="email" onChange={handleChange} />
            </label>
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>
            <h2>Datele Tale</h2>
            <p>Numele tau :{name.nume}</p>
            <p>Prenumele tau:{name.prenume}</p>
            <p>Email : {name.email}</p>
        </div>
      </>
    );
  };

  

  
  