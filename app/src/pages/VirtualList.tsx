import { stateOptions, StateOption } from '../docs/data';
import { useEffect, useState } from 'react';
import { addDelay, asyncLoop } from '../utils/utils';
import { Button } from "@symphony-ui/uitoolkit-components";
import '@symphony-ui/uitoolkit-components/styles';

const VirtualList = () => {
  const [items, setItems] = useState([]);

  // TODO -> Fetch API
  const [delay, setDelay] = useState(() =>
    window.localStorage.getItem('delay') || '');

  useEffect(() => {
    window.localStorage.setItem('delay', delay);
  });

  const getItems = async (delay: number) => {
    asyncLoop(stateOptions, async (arrayValue: any) => {
      await addDelay(delay);
      if (items.findIndex(x => x.value === arrayValue.value) === -1) {
        setItems(items => [...items, arrayValue])
      }
    });
  }

  const preventPasteNegative = (e) => {
    const clipboardData = e.clipboardData || window.Clipboard;
    const pastedData = parseFloat(clipboardData.getData('text'));
    if (pastedData < 0 || isNaN(pastedData)) {
      e.preventDefault();
    }
  };

  const preventMinus = (e) => 
    e.code === 'Minus' &&   e.preventDefault();
  
  const renderList = async () =>
    items.length ? setItems([]) : await getItems(Number(delay));

  return <main>
    <h1>Async list of elements</h1>
    <p>Renders a list of countries with delay</p>
    <div className='w-1000'>
      <label className='mb-8'>Miliseconds of delay: </label>
      <input type="number" value={delay}
        onChange={(e) => setDelay(e.target.value)}
        className='my-8 w-50'
        onPaste={preventPasteNegative}
        onKeyPress={preventMinus}
        min='0'
      />
    </div>
    <div className='mb-20'>*Only positive integer values accepted</div>
    <div>

      <Button onClick={renderList}>{items.length ? 'Reset' : 'Render list'}</Button>
    </div>
    <div className='mt-20 ml-20'>{items.map((item: StateOption, index) => <div key={index}>{item.label}</div>)}</div>
  </main>
}

export default VirtualList;
