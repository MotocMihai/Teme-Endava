import logo from './logo.svg';
import './App.css';

function App() {

  const[value,setValue]=useState();

  const handleChangeInput=(event)=>{
    setValue(event.target.value);
  };
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
