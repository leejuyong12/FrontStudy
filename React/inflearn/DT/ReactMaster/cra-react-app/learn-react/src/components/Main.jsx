import { useState } from 'react';
import Counter from './Counter';

function Main(){

  const [total, setTotal] = useState(0);
  const handleTotal = () =>{
    setTotal(total+1);
  }
  return(
    <main>
      <h2>total : {total}</h2>
      <Counter onTotal={handleTotal}/>
      <br/>
      <hr/>
      <br/>
      <Counter onTotal={handleTotal}/>
    </main>
  )

}
export default Main;