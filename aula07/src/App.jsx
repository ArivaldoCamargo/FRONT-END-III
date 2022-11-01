
import { useState } from "react";
import "./styles.css"

const App = () => {
  const [items, setItems] = useState([1]);

  function addItem() {
    let temp = [...items];

    setItems([...items, items.length + 1])
  }
  return (
    
    
    <div className="listagem">
      <h2>Adicione itens a sua lista, clique no botão abaixo</h2>
      <ul>
        {items.map((item) => (
           <p>{`O item ${item} foi adicionado a sua lista`}</p>


        ))} 
      </ul>

      <button onClick={addItem}>Adicionar</button>
    </div>


  );
}
export default App