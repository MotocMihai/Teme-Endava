import './App.css';
import {Welcome} from "./Components/Welcome";
import {useState} from "react";
import {Input} from "@material-ui/core";
import { Orders } from "./views/Orders";
import { blue } from '@material-ui/core/colors';
import {makeStyles} from "@material-ui/core";
import{AppHeader} from "./Components/AppHeader"


function App() {
  const [value, setValue] = useState();

  const handleChangeInput = (event) => {
      setValue(event.target.value);
  };


 
  return (
      <div className="App">
          <AppHeader/>
          
          <Welcome name={value}/>
          <Input onChange={handleChangeInput}/>
          
          <Orders/>
      
      </div>
  );
}

export default App;