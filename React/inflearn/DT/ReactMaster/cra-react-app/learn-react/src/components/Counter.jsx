
//함수 선언식
// -> export default function Counter (){ ~~  } 이런식으로 바로 export할수 있지만 함수 표현식은 안된다.(export default만 안되는것!) 
//export const Counter ~~ 이건 된다.
// function Counter() {
    //상태나 로직이 있는 경우 함수 선언식 사용
//   return (
//     <button>Counter</button>

//   )

// }

//함수 표현식
  //UI만 담당하는 컴포넌트일때는 주로 함수 표현식 사용(return 없이)
// const Counter = function(){
//   return (
//     <button>Counter</button>
//   )
// }

import {useState} from 'react';

//ES6화살표 함수 문법 활용
const Counter = ({onTotal}) => {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter(counter+1);  // 이 함수로 3개를 써도 똑같이 +1만 된다. 왜냐하면 스냅샷이기 때문에
    setCounter((c)=>c+1); // 콜백함수로 쓰면 이거를 여기에 3개쓴다 그러면 +3이 된다
    if(onTotal){
      onTotal();
    }

  }
  return (
    <button onClick={handleCounter}>Counter : {counter} </button>
  )
}
export default Counter;