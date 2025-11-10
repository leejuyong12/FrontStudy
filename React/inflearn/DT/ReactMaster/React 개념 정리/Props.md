## Props



Props는 부모 컴포넌트가 자식 컴포넌트에게 값을 전달하는 방법이다.

- 컴포넌트 간 데이터 전달에 사용
- 자식 컴포넌트에서는 읽기 전용(수정 불가)



- 예시

```jsx
function Parent() {
  return <Child name="Tom" age={20} />;
}

function Child(props) {
  return <h1>{props.name}은 {props.age}살입니다.</h1>;
}

// Parent가 Child에게 name과 age를 전달
// Child는 props.name, props.age로 사용
```



- 특징

| 특징                   | 설명                                                |
| ---------------------- | --------------------------------------------------- |
| 단방향 데이터 흐름     | 부모 > 자식 방향으로만 전달                         |
| 읽기 전용              | 전달받은 props를 자식에서 변경 불가                 |
| 컴포넌트 재사용성 높음 | 같은 컴포넌트에 다른 props를 주면 다른 UI 생성 가능 |



### 구조분해할당(Destructuring)

위에서 `props.name` `props.age` 라고 계속 쓰면 귀찮고 코드도 길어진다.

그래서 구조분해할당을 사용해 props 안의 값을 바로 꺼내 사용한다.



- 예시

```jsx
function Child({ name, age }) {
  return <h1>{name}은 {age}살입니다.</h1>;
}
```

- 구조분해할당이 좋은 상황
  - props가 많을때
  - 코드 가독성을 높이고 싶을때
  - 반복되는 props. 사용을 줄이고 싶을때

```jsx
function App() {
  return (
    <Profile
      name="Tom"
      age={20}
      email="tom@example.com"
      phone="010-1234-5678"
      address="서울시 강남구"
    />
  );
}

```

```jsx
function Profile({ name, age, email, phone, address }) {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{address}</p>
    </div>
  );
}

```





### children

부모 컴포넌트가 자식 컴포넌트 태그 사이에 넣은 내용을 의미하는 특별한 props

즉, 컴포넌트를 태그로 감싸서 그 안에 작성한 내용을 children이라는 이름으로 전달받을 수 있다.



- 예시

```jsx
// 부모 컴포넌트

function App() {
  return (
    <Layout>
      <h1>안녕하세요!</h1>
      <p>이 내용이 children으로 전달됩니다.</p>
    </Layout>
  );
}

```

```jsx
//자식 컴포넌트

function Layout({ children }) {
  return (
    <div className="box">
      {children}
    </div>
  );
}

```



- children을 쓰는 이유
  - 레이아웃 재사용할 때 매우 유용하다.
  - 컴포넌트를 감싸는 형태(wrapper)만들 때 자주 사용

```jsx
//예시 : 버튼 스타일은 동일하지만 안에 오는 내용은 바꿔야 할 때

function Button({ children }) {
  return <button className="primary">{children}</button>;
}

<Button>저장</Button>
<Button>취소</Button>
```

| 사용 코드                                | children 값             |
| ---------------------------------------- | ----------------------- |
| `<Button>저장</Button>`                  | `"저장"`                |
| `<Button><strong>확인</strong></Button>` | `<strong>확인</strong>` |

