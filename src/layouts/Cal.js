import React, {useState, useEffect} from 'react';
import ReactDOM from "react-router-dom";

const App = () => {
  const [valueX, setValueX] = useState(0);
  const [valueY, setValueY] = useState(0);
  const [operations, setOperations] = useState('+');
  const [result, setResult] = useState(0);

  const handleSubmit =()=>{
      if(operations==='+'){
          setResult(parseInt(valueX)+parseInt(valueY));
      }
      if(operations==='*'){
        setResult(valueX*valueY);
      }
      if(operations==='Fahrenheit'){
        setResult((valueX*1.8)+32);
      }
      if(operations==='Celsius'){
       setResult((valueX-32)/1.8)
      }
  }
  return (
      <div className="App">
        <div className="calculator">
        <div className="display">
        <div class="c">
          <input class="x" type="text" value={valueX} onChange={(e)=>setValueX(e.target.value)}/>
          <h4>{operations}</h4>
          <input type="text" value={valueY} onChange={(e)=>setValueY(e.target.value)}/>
        </div>
        </div>
        <div className="operators">
          <button onClick={()=>setOperations('+')}>+</button>
          <button onClick={()=>setOperations('*')}>*</button>
          <button onClick={()=>setOperations('Fahrenheit')}>Fahrenheit</button>
          <button onClick={()=>setOperations('Celsius')}>Celsius</button>

          <button onClick={handleSubmit}>=</button>
        </div>
           <h3>Result: {result} </h3>
       </div>
       </div>
  );
}

export default App;
