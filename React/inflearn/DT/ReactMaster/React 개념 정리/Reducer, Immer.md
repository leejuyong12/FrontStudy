## Reducer와 Immer



### Reducer

- 한 컴포넌트에서  state 업데이트가 여러 이벤트 핸들러로 분산되는 경우가 있다. 이 경우 컴포넌트를 관리하기 어려워진다. 이 문제 해결을 위해 state를 업데이트하는 모든 로직을 reducer를 사용해 컴포넌트 외부로 단일 함수로 통합해 관리할 수 있다.

- switch 문을 사용하는게 일반적이다.

```jsx
//1. 현재 상태와 변경 규칙(reducer)을 만든다
//state : 현재값
//action : 어떻게 바꿀지 명령

function reducer(state, action) {
  //return 안할거면 break;로 케이스를 끝내줘야한다.
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

//2. 컴포넌트에서 useReducer 사용하기
// count : 현재 상태 값
// dispatch : 액션을 보내는 함수
const [count, dispatch] = useReducer(reducer, 0);

//3. 상태 변경은 dispatch로 명령을 보낸다
<button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
<button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>


//비유를 해보자면
//reducer : 규칙서(이런 요청이 오면 이렇게 처리해라)
//action : 직원이 보내는 업무요청서
//dispatch : 요청서를 제출하는 행위
//state : 회사의 현재 상황

//즉, dispatch(action 작성) -> reducer를 읽고 규칙대로 state 변경

//버튼 하나로 상태만 살짝 바꾸는 정도에는 useState로도 충분.
//상태 변경 규칙이 여러 개 있고 복잡할때 useReducer가 깔끔하다.
//또한, 상태 업데이트 로직을 한 곳에 모으고 싶을때 쓴다.
```



### Immer, useImmer, useImmerReducer

```jsx

//Immer 정리
'불변성을 신경 쓰지 않고 객체/배열을 마치 직접 수정하듯 써도, 내부적으로 알아서 불변 업데이트를 해주는 라이브러리'
'리액트에서는 상태를 변경할 때 기존 객체를 직접 수정하면 안되고(불변성 유지) 새로운 객체를 만들어야 한다.'

//이런식으로 복사해서 사용.
setUser({
  ...user,
  address: {
    ...user.address,
    city: "서울",
  }
});

//하지만 Immer를 쓰면 이렇게 바뀐다.
setUser(draft => {
  draft.address.city = "서울";
});
//draft라는 임시 객체를 '직접 수정하는 것처럼'작성해도 Immer가 자동으로 새로운 불변 객체로 만들어준다. -> 코드가 직관적이고 깔끔해짐!
```

```jsx
//useImmer 정리
'리액트의 useState와 비슷하게 상태를 관리하면서, 업데이트할 때 Immer문법을 사용할 수 있게 해주는 Hook'

//useState + Immer 결합버전이라고 이해하면 된다.
const [state, updateState] = useImmer(initialValue);

//예시
const [person, updatePerson] = useImmer({ name: "Tom", age: 20 });

updatePerson(draft => {
  draft.age++;
});
```

```jsx
//useImmerReducer 정리
'useReducer 개념에 Immer를 추가한 것!'
'useReducer는 불변성을 직접 지켜줘야 해서 reducer 내부가 복잡해질 때가 많다. -> Immer를 결합하면 reducer에서 불변성 걱정 없이 상태를 직접 수정하듯 코드 작성이 가능하다.'

//장점
//1. 불변성 신경 쓸 필요 없음
//2. 복잡한 상태 변경 로직을 간단하고 직관적으로 작성 가능
//3. 큰 상태 객체를 다룰 때 특히 편리

//사용 방법
//1. reducer 작성(draft 사용)
import { useImmerReducer } from "use-immer";

function reducer(draft, action) {
  switch (action.type) {
    case "ADD":
      draft.count += 1;
      break;
    case "SUB":
      draft.count -= 1;
      break;
  }
}

//2. 컴포넌트에서 사용
const initialState = { count: 0 };

const [state, dispatch] = useImmerReducer(reducer, initialState);

//3. 상태 변경은 dispatch로 요청
<button onClick={() => dispatch({ type: "ADD" })}>+</button>
<button onClick={() => dispatch({ type: "SUB" })}>-</button>

//정리
//Immer는 불변성을 자동으로 처리s해주는 라이브러리
//useImmer는 useState + Immer
//useImmerReducer는 useReducer + Immer로, 복잡한 상태 변경을 쉽게 만들어줌.
```

