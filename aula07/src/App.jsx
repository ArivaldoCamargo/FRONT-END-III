
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([1]);

  function addItem() {
    let temp = [...items];

    setItems([...items, items.length + 1])
  }
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li>{'O item ${item} foi adicionado à lista'}</li>


        ))} 
      </ul>

      <button onClick={addItem}>APERTE</button>
    </div>


  );
}
export default App