# 기초개념부터 린캔버스 프로젝트까지



```
//환경 세팅

npm show create-vite versions      (vite 버전 체크 - 강의와 동일한 환경을 위해)

npm init vite@5.2.3

npm init vite@latest    (vite 최신버전으로 )


//react 설치

크롬에  Create React App   검색


//방법 1. //webpack을 기반으로 빌드 진행
npx create-react-app 프로젝트명

code 프로젝트명/  하면 새로운 window에서 열린다.

//방법 2. //vite를 기반으로 빌드 진행(권장)
npm init vite@latest

npm run dev
```



### 컴포넌트

- UI를 구성하는 독립적이고 재사용 가능한 조각
- React로 만든 프로젝트는 root컴포넌트라는 App 컴포넌트가 있고, 그 하위에 다른 컴포넌트들이 존재한다.
- 컴포넌트 분리기준
  - 재사용성
    - 반복적으로 사용하는 공통 UI를 재사용 할 수 있도록 컴포넌트로 분리
  - 가독성
    - 코드를 작고 독립적인 컴포넌트로 나누어 코드의 가독성과 이해도를 높인다.
  - 단일 책임 원칙(SRP)
    - 컴포넌트가 하나의 역할을 수행하도록 하여 코드의 이해도와 유지보수성을 높인다.
- React 공식문서에서는 컴포넌트를 class 대신 함수로 정의하는 것을 추천한다.
  - class형 대비 코드를 작성하기 쉽고 성능면에서 유리하기 때문이다.

```jsx
//함수 이름은 무조건 파스칼케이스(시작문자는 모두 대문자) ex)MyClass
//참고) 카멜케이스(소문자로 시작 후 시작문자는 각각 대문자) ex)myVariableName


//function 사용하는 것은 함수 선언식(일반적으로 사용)
// -> export default function Counter (){ ~~  } 이런식으로 바로 export할수 있지만 함수 표현식은 안된다.(export default만 안되는것!) 
//export const Counter ~~ 이건 된다.
function Counter() {
  //상태나 로직이 있는 경우 주로 함수 선언식 사용
  return (
    <button>Counter</button>
  )
}
// 변수에 함수를 할당하는 방식 : 함수 표현식
//UI만 담당하는 컴포넌트일때는 주로 함수 표현식 사용(return 없이)
const Counter = function(){
    <button>Counter</button>
}
//또는 ES6화살표 함수 문법 사용
const myFunction = () => {
  return (
    <button>Counter</button>
  )    
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      Hello React
    </>
  )
}
```

- 컴포넌트 jsx 파일에 rsf 입력하면 자동으로 함수 선언식 만들어준다. 
  - Reactjs code snippets 확장 프로그램 설치해서 가능
