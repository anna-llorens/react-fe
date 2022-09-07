import { stateOptions, StateOption } from '../docs/data';
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

  return <main>
      <h1>Render async list of elements</h1>
      <button onClick={()=> getItems(100)}>Render list of countries with delay</button>
      <button onClick={()=> getItems(0)}>Render list of countries without delay</button>
      <button onClick={()=> setItems([])}>Hide list</button>
      <div className='mt-20'>{items.map((item: StateOption, index) => <div key={index}>{item.label}</div>)}</div>
    </main>
}

export default VirtualList;
