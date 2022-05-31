import { Link } from 'react-router-dom';
import { stateOptions, StateOption} from '../docs/data';
import '../App.scss';
import { useState } from 'react';
import { addDelay, asyncLoop } from '../utils/utils';

const VirtualList = () => {
  
const [items, setItems] = useState([{ value: 'AL', label: 'Alabama' } as StateOption]);

const getItems = async() => {

  asyncLoop(stateOptions, async(arrayValue: any) => {
    await addDelay(0);
    debugger;
    if(items.findIndex(x => x.value===arrayValue.value)===-1) {
      console.log(arrayValue);
      setItems(items => [...items, arrayValue])
    }
    console.log(items);
    

  });
}



  return   <div className="virtual-list">
  <nav className='back-home-link'>
    <Link to="/">Back Home</Link>
</nav>
<main>
  <div>hello</div>
  <button onClick={getItems}>My button</button>
    {/* { items.map((item:StateOption, index)=> <div key={index}>{item.label}</div>)} */}
</main>
</div>
}



  

export default VirtualList;
