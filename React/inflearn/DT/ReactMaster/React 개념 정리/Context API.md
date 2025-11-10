## Context API

- 여러 컴포넌트에게 공통으로 필요한 데이터를 중간 컴포넌트에게 계속 전달(prop drilling)하지 않고 한번에 공유할 수 있게 해주는 기능
- Header, Footer, 사용자 로그인 정보, 언어 설정 등 전체에서 공유해야 하는 값이 있으면 보통 아래와 같이 전달해야 한다.

```css
App → A → B → C → D (필요한 곳까지 props로 계속 전달해야 함)
```

- 위와 같은 과정을 prop drilling이라고 한다. Context API는 바로 이 문제를 해결해준다.
- 즉, Context API는 '전역 상태 저장소'이고 필요한 컴포넌트가 직접 가져다 쓸 수 있게 하는 시스템이다.

- 가장 가까운 컴포넌트에서 값을 가져온다!
- 자주 변경되지 않는 데이터를 사용하는 것이 좋다.
  - 값이 바뀌면 리렌더링이 되는데 루트 컴포넌트에서 값이 변경되어버리면 하위 컴포넌트 모두 다 리렌더링이 되기 때문에 성능면에서 안좋다.
- Context API를 계속 쓴다고 능사가 아니다. props로 먼저 작성을 해보고 필요하다면 쓰는게 좋다.

- 동작 방법

| 요소                | 역할                           |
| ------------------- | ------------------------------ |
| Context 생성        | 공유할 데이터 저장소 만들기    |
| Provider            | 데이터를 공급하는 부모 역할    |
| Consumer/useContext | 데이터를 가져다 쓰는 자식 역할 |

- 예시

```jsx
//1. Context 만들기
const ThemeContext = createContext();

//2. Provider로 감싸서 값 공급하기
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>

//3. 어디서든 useContext로 값 꺼내 쓰기(import 해오고!)
const theme = useContext(ThemeContext); // "dark"

```



