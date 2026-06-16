
import "./Contador.css";
export function Contador( {count , setCount}) {

 const incrementar = () => setCount(count + 1);
  
  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  
  return (
      <div className="contador">
      <button onClick={decrementar}>-</button>
      <span> {count} </span>
      <button onClick={incrementar}>+</button>
    </div>
  )
}

export default Contador;
