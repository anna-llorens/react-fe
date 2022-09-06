import { Link } from 'react-router-dom';
import { stateOptions, StateOption } from '../docs/data';
import '../App.scss';
import { useState } from 'react';
import { addDelay, asyncLoop } from '../utils/utils';

const VirtualList = () => {
  const [items, setItems] = useState([]);

  const getItems = async (delay: number) => {
    asyncLoop(stateOptions, async (arrayValue: any) => {
      await addDelay(delay);
      if (items.findIndex(x => x.value === arrayValue.value) === -1) {
        console.log(arrayValue);
        setItems(items => [...items, arrayValue])
      }
      console.log(items);
    });
  }

  return <div className="virtual-list">
    <nav className='back-home-link'>
      <Link to="/">Back Home</Link>
    </nav>
    <main>
      <h3>Virtual list</h3>
      <button onClick={()=> getItems(100)}>Render list of countries with delay</button>
      <button onClick={()=> getItems(0)}>Render list of countries without delay</button>
      <button onClick={()=> setItems([])}>Hide list</button>
      <div className='mt-42'>{items.map((item: StateOption, index) => <div key={index}>{item.label}</div>)}</div>
    </main>
  </div>
}





export default VirtualList;
