import  { useState } from "react";
import "./Contador.css";
function Contador() {
  // 1. Declarar el estado 'count' inicializado en 0
  const [count, setCount] = useState(0);
  
  if(count < 0) {
    setCount(0);
  }
  
  return (
    <div className="contador">
      
      
      <button onClick={() => setCount(count - 1)}>Disminuir</button>
      <span> {count}</span>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </div>
  );
}

export default Contador;
