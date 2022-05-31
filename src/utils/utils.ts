
export const asyncLoop = async(array:any, cb: any)=> {
  console.log('Get options async Start');
  for (let index = 0; index < array.length; index++) {
    
    await cb(array[index], index, array);
    
  }
  console.log('Get options async End');
}

export const addDelay = async(delay: any) => new Promise(r => setTimeout(r, delay));
