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

### JSX

- JavaScript XML 의 약어로, Javascript를 확장한 문법을 말한다.

- JavaScript파일을 HTML과 비슷하게 마크업을 작성할 수 있도록 해준다.

- 규칙

  - 하나의 루트 엘리먼트로 반환하기

    - 하나의 부모태그로 감싸줘야 한다.

    ```jsx
    return(
    	//<> 이런 태그로 감싸주거나
    	//<div>태그로 감싸줘야 한다.
    )
    
    
    ```

  - HTML Attribute(속성)은 대부분 카멜 케이스(ex- className)으로 작성한다.

    ```jsx
    <div className="name">
    	
    </div>
    ```

  - 변수나 함수를 생성하고 return 내에 중괄호로 값을 넣을 수 있다.

    ```jsx
    
    export default function CourseItem(props) {
    
    	const title = '입문자를 위한, HTML&CSS 웹 개발 입문';
    	const description = '웹 개발에 필요한 기본 지식을 배웁니다. ';
    	const image = './img/htmlcss.png';
    	const alt = '강의 이미지';
    	const isEmpty = false;
    	const course = {
    		title1 : '두번째',
    		description1 : '두번째에요'
    	}
    	if(isEmpty){
    		return(
    			<p>강의가 없습니다.</p>
    		)
    	}
      return (
        <div>
    		<article className="course" style={{backgroundColor : 'black', color : 'white'}}>
                {course.title1}
    			<img className="course__img" src={image} alt={alt} />
    			<div className="course__body">
    				<div className="course__title">{title}</div>
    				<div className="course__description">{description}</div>
    			</div>
    		</article>
        </div>
      );
    }
    
    
    ```



### props

- 리액트 컴포넌트는 props를 이용해 서로 통신한다.
- 모든 부모 컴포넌트는 자식 컴포넌트에게 props를 사용하여 정보를 전달할 수 있다.

ex(1)

```jsx

export default function CourseItem({title, description, thumbnail}) {


  return (
    <div>
		<article className="course">
			<img className="course__img" src={thumbnail} alt="강의 이미지" />
			<div className="course__body">
				<div className="course__title">{title}</div>
				<div className="course__description">{description}</div>
			</div>
		</article>
    </div>
  );
}
```

```jsx
import CourseItem from './CourseItem';

function CourseListCard(props) {

  const course1 = {
    title: '입문자를 위한, HTML&CSS 웹 개발 입문',
    description: '웹 개발에 필요한 기본 지식을 배웁니다.',
    thumbnail: '/img/htmlcss.png',
  };
  const course2 = {
    title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
    description: '쉽고! 알찬! 내용을 준비했습니다.',
    thumbnail: '/img/js.png',
  };
  const course3 = {
    title: '포트폴리오 사이트 만들고 배포까지!',
    description: '포트폴리오 사이트를 만들고 배포해 보세요.',
    thumbnail: '/img/portfolio.png',
  };

  return (
	//style={{backgroundColor : 'black', color : 'white'}
		<div className="card" >
			<div className="card__header">강의 목록</div>
			<div className="card__body">
				<div className="courses">
        	<CourseItem title={course1.title} description={course1.description} thumbnail={course1.thumbnail}/>
			<CourseItem title={course2.title} description={course2.description} thumbnail={course2.thumbnail}/>
			<CourseItem title={course3.title} description={course3.description} thumbnail={course3.thumbnail}/>
				</div>
			</div>
		</div>
  );
}

export default CourseListCard;
```



ex(2)

```jsx
export default function CourseItem({title, description, thumbnail}) {


  return (
    <div>
		<article className="course">
			<img className="course__img" src={thumbnail} alt="강의 이미지" />
			<div className="course__body">
				<div className="course__title">{title}</div>
				<div className="course__description">{description}</div>
			</div>
		</article>
    </div>
  );
}
```

```jsx
import CourseItem from './CourseItem';

function CourseListCard({items}) {

	const [course1, course2, course3] = items;
  return (
	//style={{backgroundColor : 'black', color : 'white'}
		<div className="card" >
			<div className="card__header">강의 목록</div>
			<div className="card__body">
				<div className="courses">
        	<CourseItem {...course1}/>
			<CourseItem {...course2}/>
			<CourseItem {...course3}/>
				</div>
			</div>
		</div>
  );
}

export default CourseListCard;
```

```jsx
import './App.css'
import CourseListCard from './components/course/CourseListCard';

function App() {

  const items = [
    {
      title: '입문자를 위한, HTML&CSS 웹 개발 입문',
      description: '웹 개발에 필요한 기본 지식을 배웁니다.',
      thumbnail: '/img/htmlcss.png',
    },
    {
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      thumbnail: '/img/js.png',
    },
    {
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      thumbnail: '/img/portfolio.png',
    }


  ]
  return (
    <>
  <main>
    <CourseListCard items={items}></CourseListCard>
	</main>
    </>
  )
}

export default App

```

ex(3)

- 컴포넌트 내부에 있는 콘텐츠를 넘기게 되면 children으로 받는다.

```jsx
export default function Card({title, children}){

    return(
        <div className="card" >
            <div className="card__header">{title}</div>
            <div className="card__body">
                {children}
            </div>
        </div>
    )

}
```

```jsx
import Card from '../Card';
import CourseItem from './CourseItem';

function CourseListCard({items}) {

	const [course1, course2, course3] = items;
  return (
	//style={{backgroundColor : 'black', color : 'white'}

	<Card title="강의 목록">
		<div className="courses">
        	<CourseItem {...course1}/>
			<CourseItem {...course2}/>
			<CourseItem {...course3}/>
		</div>
	</Card>


  );
}

export default CourseListCard;
```

```jsx
import './App.css'
import CourseListCard from './components/course/CourseListCard';

function App() {

  const items = [
    {
      title: '입문자를 위한, HTML&CSS 웹 개발 입문',
      description: '웹 개발에 필요한 기본 지식을 배웁니다.',
      thumbnail: '/img/htmlcss.png',
    },
    {
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      thumbnail: '/img/js.png',
    },
    {
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      thumbnail: '/img/portfolio.png',
    }


  ]
  return (
    <>
  <main>
    <CourseListCard items={items}></CourseListCard>
	</main>
    </>
  )
}

export default App

```

### 조건부 렌더링

```jsx
import './App.css'
import CourseListCard from './components/course/CourseListCard';

function App() {

  const items = [
    {
      title: '입문자를 위한, HTML&CSS 웹 개발 입문',
      description: '웹 개발에 필요한 기본 지식을 배웁니다.',
      thumbnail: '/img/htmlcss.png',
      isFavorite: true,
      link: 'https://inf.run/JxyyT'
    },
    {
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      thumbnail: '/img/js.png',
      isFavorite: false,
      link: 'https://inf.run/Kpnd'
    },
    {
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      thumbnail: '/img/portfolio.png',
      isFavorite: true,
      link: 'https://inf.run/YkAN'

    }


  ]
  return (
    <>
  <main>
    <CourseListCard items={items}></CourseListCard>
	</main>
    </>
  )
}

export default App

```

```jsx
import Card from '../Card';
import CourseItem from './CourseItem';

function CourseListCard({items}) {

	const [course1, course2, course3] = items;
  return (
	//style={{backgroundColor : 'black', color : 'white'}

	<Card title="강의 목록">
		<div className="courses">
        	<CourseItem {...course1}/>
			<CourseItem {...course2}/>
			<CourseItem {...course3}/>
		</div>
	</Card>


  );
}

export default CourseListCard;
```

```jsx
//조건부 렌더링 위해 함수 생성
//하단에 AND 연산자 참고
//result = "" && "foo";  -> result에 "" 빈문자열 할당
//result = 2 && 0;       -> result에 0 할당
//result = "foo" && 4;   -> result에 4 할당

function HeartIconBtn({isFavorite = false}){

	return(
		<button className="btn">
			<img className="btn__img" src={isFavorite ? ("/img/heart-fill-icon.svg") : ("/img/heart-icon.svg")}/>
			
		</button>
	)
	
}

function LinkIconBtn({link}){
	return(
		<a className="btn" href={link} target="_blank" rel="noreferrer">
			<img className="btn__img" src="/img/link-icon.svg" alt=""></img>
		</a>
	)
}

export default function CourseItem({title, description, thumbnail, isFavorite, link}) {

  return (

	<article className="course">
		<img className="course__img" src={thumbnail} alt="강의 이미지" />
		<div className="course__body">
			<div className="course__title">{title}</div>
			<div className="course__description">{description}</div>
		</div>
        
		<div className="course__icons">
			<HeartIconBtn isFavorite={isFavorite}></HeartIconBtn>
			{link && <LinkIconBtn link={link}></LinkIconBtn>}

		</div>
	</article>

  );
}


```



### 리스트 렌더링

```jsx
//여러개의 노드를 렌더링 하고 싶을때는 fragment 활용

import { Fragment } from 'react';
import Card from '../Card';
import CourseItem from './CourseItem';

function CourseListCard({title, items}) {

  const lastIndex = items.length - 1;
  return (
	//style={{backgroundColor : 'black', color : 'white'}

	<Card title={title}>
		<div className="courses">
			{items.map((item, index)=> 
				<Fragment key={item.id}>
					<CourseItem  {...item}/>
					{index !== lastIndex -1 && <hr className='divider'></hr>}
				</Fragment>
			)}
		</div>
	</Card>


  );
}

export default CourseListCard;
```

```jsx
import './App.css'
import CourseListCard from './components/course/CourseListCard';

function App() {

  const items = [
    {
      id:0,
      title: '입문자를 위한, HTML&CSS 웹 개발 입문',
      description: '웹 개발에 필요한 기본 지식을 배웁니다.',
      thumbnail: '/img/htmlcss.png',
      isFavorite: true,
      link: 'https://inf.run/JxyyT'
    },
    {
      id:1,
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      thumbnail: '/img/js.png',
      isFavorite: true,
      link: 'https://inf.run/Kpnd'
    },
    {
      id:2,
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      thumbnail: '/img/portfolio.png',
      isFavorite: false,
      link: 'https://inf.run/YkAN'

    }


  ]
  const favoriteItems = items.filter(item => item.isFavorite)
  return (
    <>
  <main style={{flexDirection:'column', gap:'1rem'}}>
    <CourseListCard title="강의 목록" items={items}></CourseListCard>
    <CourseListCard title="관심 강의" items={favoriteItems}></CourseListCard>
	</main>
    </>
  )
}

export default App

```



### 이벤트 핸들링

```jsx
function HeartIconBtn({isFavorite = false}){

	function handleFavorite(){
		alert(isFavorite ? '좋아요' : '모르겠어요');
	}
	return(
		//onClick 안에 () 같이 쓰면 페이지 렌더링 될때 바로 실행됨
		//이거도 <button className="btn" onClick={handleFavorite}></button>
		<button className="btn" onClick={()=>alert('헬로우')}>
			<img className="btn__img" src={isFavorite ? ("/img/heart-fill-icon.svg") : ("/img/heart-icon.svg")}/>
			
		</button>
	)
	
}
```

- 함수를 props로 넘겨줄수도 있다.

```jsx
function HeartIconBtn({handleFavorite, isFavorite = false}){

	return(
		<button className="btn" onClick={handleFavorite}>
			<img className="btn__img" src={isFavorite ? ("/img/heart-fill-icon.svg") : ("/img/heart-icon.svg")}/>
			
		</button>
	)
	
}


export default function CourseItem({title, description, thumbnail, isFavorite, link}) {
    //함수 생성 후 props로 전달됨
	function handleFavorite(){
		alert(isFavorite ? '좋아요' : '모르겠어요');
	}
  return (

	<article className="course">
		<img className="course__img" src={thumbnail} alt="강의 이미지" />
		<div className="course__body">
			<div className="course__title">{title}</div>
			<div className="course__description">{description}</div>
		</div>
		<div className="course__icons">
			<HeartIconBtn isFavorite={isFavorite} handleFavorite={handleFavorite}></HeartIconBtn>
			{link && <LinkIconBtn link={link}></LinkIconBtn>}

		</div>
	</article>

  );
}
```



#### Deep Copy(깊은 복사)   &  Shallow Copy(얕은 복사)

- **얕은 복사**란 객체의 최상위 속성들만 복사하는 방식으로, 복사된 객체의 속성들은 최상위 속성만 복사되고 중첩된 객체 속성은 원본 객체의 속성과 동일한 참조(레퍼런스)를 공유한다.
- 즉, 복사본이나 원본을 변경하면 중첩된 객체의 속성(동일한 메모리 주소를 가리킨다)은 서로 영향을 주게 된다.

```jsx
//얕은 복사
const original = {
	name : '홍길동', //최상위 속성-값 자체가 복사됨
    school:{		//중첩된 객체-주소(참조)만 복사됨
        ele:'광주',
        mid:'서울'
    }
    place : '서울', //최상위 속성-값 자체가 복사됨
	info:{			//중첩된 객체-주소(참조)만 복사됨
		age:30
	}
}
//얕은 복사 방법 1. 스프레드 연산자(...)사용
const copy = {...original}
copy.name = '김철수'
//console 찍어서 확인해보면 원본은 '홍길동', 복사본은 '김철수'로 나온다.
copy.info.age = 50
//console 찍어서 확인해보면 원본도 50, 복사본도 50으로 나온다.

//만약 중첩된 객체도 값 자체를 복사하고 싶으면
const copy = {
    ...original,
    info:{
        ...original.info
    }
}


//얕은 복사 방법 2. Object.assign() 사용
const original = {name : '홍길동', info : {age: 30}};
const copy = Object.assign({}, original);

copy.info.age = 50;
//console 찍어서 확인해보면 원본도 50, 복사본도 50으로 나온다.

//얕은 복사 방법 3. 배열의 slice(), concat(), Array.from()
const originalArray = [1, 2, {value : 30}];
const copyArray = originalArray.slice();
const copyArray = [].concat(originalArray);
const copyArray = Array.from(originalArray);

copyArray[2].value = 100;
//console 찍어서 확인해보면 원본도 50, 복사본도 50으로 나온다.

```



- **깊은 복사**란 객체의 모든 속성과 중첩된 객체들을 완전히 **새로운 메모리**에 복사하는 방식이다. 그렇기 때문에 원본 객체와 복사된 객체는 어떤 참조도 공유하지 않으므로, 한쪽을 변경해도 다른 쪽에 영향을 주지 않는다.

```jsx
//깊은 복사
const original = {
	name : '홍길동', //최상위 속성
	info:{			//중첩된 객체
		age:30
	}
}
//깊은 복사 방법 1. JSON.stringify() + JSON.parse() 사용
const copy = JSON.parse(JSON.stringify(original));
copy.info.age = 50; //복사본만 바뀜

//다른 최신 방법들 있는데 그냥 이거 쓰자.
```

- Deep Copy 와 Shallow Copy의 사용 사례와 주의점

  - 얕은 복사 활용 사례

    - 최상위 속성만 변경이 필요한 경우
    - 성능이 중요한 경우(깊은 복사보다 빠름)
    - 중첩된 객체가 없거나 변경할 필요가 없는 경우

  - 깊은 복사 활용 사례

    - 상태 관리 라이브러리(Redux, MobX 등)에서 불변성 유지
    - 원본 데이터를 보존하면서 여러 변형을 시도해야 할 때
    - 복잡한 객체 구조에서 독립적인 사본이 필요할 때

    

(추가.) 참조할당

```jsx
const original = {
	name : '홍길동', //최상위 속성
	info:{			//중첩된 객체
		age:30
	}
}
//참조할당
const copy = original;

copy.name = '김철수';
copy.info.age = 50;

//console 찍어보면 original과 copy는 같은 값이 나온다. 그 이유는 참조할당은 같은 주소값을 바라보기 때문에!
```



#### 중첩된 객체 평탄화

- immer 사용

```
npm i use-immer  로 설치
```

* 일단 immer 사용 전 코드(useState 사용)

```jsx
import Card from '../Card';
import {useState} from 'react';

export default function CourseForm(){
  const [form, setForm] = useState({
    title:'리액트 강의',
    description: '리액트 기초부터 실전까지',
    info:{
      level:1,
      skill: 'React'
    }
  })
  function handleCourseForm(e){
    e.preventDefault();
  }
  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
      //description:form.description
    });
  }
  const handleSkillChange = (e) =>{
    setForm({
      ...form,
      info:{
        ...form.info,
        skill:e.target.value
      }
    })
  }
  const handleLevelChange = (e) =>{
    setForm({
      ...form,
      info:{
        ...form.info,
        level:e.target.value
      }
    })
  }
  return(
    <Card title="강의 등록">
      <form style={{display:'flex', flexDirection:'column', gap:'1rem'}} onSubmit={handleCourseForm}>
        <input name="title" type="text" placeholder="강의 제목" title={form.title} onChange={handleChange}/>
        <input name="description" type="text" placeholder="강의 한줄 설명" description={form.description} onChange={handleChange}/>
        <div style={{display:"flex", alignItems:'center'}}>
          <label htmlFor="skill" style={{width:'100px'}}>스킬</label>
          <input name="skill" id="skill" type="text" value={form.info.skill} onChange={handleSkillChange}></input>
        </div>
        <div style={{display:"flex", alignItems:'center'}}>
          <label htmlFor="skill" style={{width:'100px'}}>난이도</label>
          <select name="level" id="level" value={form.info.level} onChange={handleLevelChange}>
            <option value="0">입문</option>
            <option value="1">초급</option>
            <option value="2">중금</option>
          </select>
        </div>
        <input type="submit" placeholder="등록"/>
        {(form.title || form.description) && (
          <div style={{marginTop: '16px', padding: '16px', backgroundColor: '#eee', borderRadius: '6px' }}>
            {form.title && (<p>제목 - {form.title}</p>)}
            {form.description && (<p>설명 - {form.description}</p>)}
            {form.info.skill && (<p>스킬 - {form.info.skill}</p>)}
            {form.info.level && (<p>레벨 - {form.info.level}</p>)} 
          </div>
        )}
        </form>
    </Card>
  )
}
```

- useImmer 사용 후
  - 밑에 코드를 보면 draft.info.skill = e.target.value; 이렇게 setter함수 안쓰고 바로 값을 수정했는데, 이렇게 할 수 있는 이유는 immer는 내부적으로 어떻게 변경되었는지 알아내어 새로운 객체를 반환해주기 때문에 가능하다.

```jsx
import Card from '../Card';
import {useImmer} from 'use-immer';
import {useState} from 'react';

export default function CourseForm(){
  const [form, updateForm] = useImmer({
  //const [form, setForm] = useState({
    title:'리액트 강의',
    description: '리액트 기초부터 실전까지',
    info:{
      level:1,
      skill: 'React'
    }
  })
  function handleCourseForm(e){
    e.preventDefault();
  }
  const handleChange = (e) =>{
    updateForm((draft)=>{
        draft[e.target.name] = e.target.value;
    })
    // setForm({
    //   ...form,
    //   [e.target.name] : e.target.value
    //   //description:form.description
    // });
  }
  const handleSkillChange = (e) =>{
    updateForm((draft)=>{
      draft.info.skill = e.target.value;
    })
    // setForm({
    //   ...form,
    //   info:{
    //     ...form.info,
    //     skill:e.target.value
    //   }
    // })
  }
  const handleLevelChange = (e) =>{
    updateForm((draft)=>{
      draft.info.level = e.target.value;
    })
    // setForm({
    //   ...form,
    //   info:{
    //     ...form.info,
    //     level:e.target.value
    //   }
    // })
  }
  return(
    <Card title="강의 등록">
      <form style={{display:'flex', flexDirection:'column', gap:'1rem'}} onSubmit={handleCourseForm}>
        <input name="title" type="text" placeholder="강의 제목" title={form.title} onChange={handleChange}/>
        <input name="description" type="text" placeholder="강의 한줄 설명" description={form.description} onChange={handleChange}/>
        <div style={{display:"flex", alignItems:'center'}}>
          <label htmlFor="skill" style={{width:'100px'}}>스킬</label>
          <input name="skill" id="skill" type="text" value={form.info.skill} onChange={handleSkillChange}></input>
        </div>
        <div style={{display:"flex", alignItems:'center'}}>
          <label htmlFor="skill" style={{width:'100px'}}>난이도</label>
          <select name="level" id="level" value={form.info.level} onChange={handleLevelChange}>
            <option value="0">입문</option>
            <option value="1">초급</option>
            <option value="2">중급</option>
          </select>
        </div>
        <input type="submit" placeholder="등록"/>
        {(form.title || form.description) && (
          <div style={{marginTop: '16px', padding: '16px', backgroundColor: '#eee', borderRadius: '6px' }}>
            {form.title && (<p>제목 - {form.title}</p>)}
            {form.description && (<p>설명 - {form.description}</p>)}
            {form.info.skill && (<p>스킬 - {form.info.skill}</p>)}
            {form.info.level && (<p>레벨 - {form.info.level}</p>)} 
          </div>
        )}
        </form>
    </Card>
  )
}

```



### 배열 업데이트

```jsx
function TodoList({todos = [], onDeleteTodo, onToggleTodo}){

  return(
    <ul>
      {todos.map(item =>(
        <li key={item.id}>
          <input 
            type="checkbox"
            checked={item.done}
            onChange={(e)=> onToggleTodo(item.id, e.target.checked)}
          />
          <span>{ item.done ? <del>{item.text}</del> : item.text}</span>
          <button
            onClick={()=> onDeleteTodo(item.id)}
          >X</button>
        </li>
      ))}
    </ul>
  )

}
export default TodoList;
```



```jsx
import './App.css'
import {useState} from 'react'
import TodoList from './components/todo/TodoList';


const initialList = [
    {id:0, text:"HTML&CSS 공부하기", done:false},
    {id:1, text:"자바스크립트 공부하기", done:false}
  ];



function AppTodo(props) {
  const [todoText, setTodoText] = useState('');

  const [todos, setTodos] = useState(initialList);


  const [insertAt, setInsertAt] = useState(todos.length - 1);


  const handleTodoTextChange = (e) => {
      setTodoText(e.target.value);
  }
  //꼭! 새 배열 복사해서 넣기
  const handleAddTodo = () =>{
    const nextId = todos.length;
    setTodos([
      ...todos,
      {id : nextId, text: todoText}
    ])
    //여기서 input 내에 있는 값을 빈값으로 만들어주면 된다.
    setTodoText('');
  }

  const handleAddTodoByIndex = () => {
    const nextId = todos.length;
    const newTodos = [
      //삽입 지점 이전 항목
      //0부터 insertAt까지 잘라낸다.
      ...todos.slice(0, insertAt),
      {id:nextId, text: todoText, done:false},
      //삽입 지점 이후 항목
      ...todos.slice(insertAt)

    ];
    setTodos(newTodos);
    setTodoText('');
  }

  //기능을 자식 컴포넌트에서 만들 생각하지말고
  //부모 컴포넌트에서 props로 기능을 내려주면 된다.
  //삭제 기능
  const handleDeleteTodo = (deleteId) =>{
    //filter 문법 확인!
    //해당하는 id의 값을 빼는거라고 생각하지말고
    //해당하는 id의 값만 빼고 반환하기
    const newTodos = todos.filter(item => item.id !== deleteId);
    setTodos(newTodos);
  }
  //input에 포커스 되어있을때 enter키 누르면 추가되는 기능
  const handleKeyDown = (e) =>{
    if(e.key === "Enter"){
      handleAddTodo();
    }
  }
  //done여부를 true/false 바꾸는 기능
  const handleToggleTodo = (id, done) =>{
    //기존 배열 안의 객체 속성을 변경!
    
    const nextTodos = todos.map(item => {
      if(item.id === id){
        return {...item, done};
      }
      return item;
    })
    setTodos(nextTodos);
  }
  //배열 순서 뒤바꿈(꼭! reverse는 원본내용을 바꿔버리니까 원본을 복사해서 사용하자)
  const handleReverse = () => {
    //아래 주석처리된 내용은 reverse 사용시!
    // const nextTodos = [...todos];
    // nextTodos.reverse();
    // setTodos(nextTodos);
    
    //2023 최신 API에서는 toReversed 사용하면 배열의 순서를 거꾸로 한 새로운 배열을 반환한다.
    setTodos(todos.toReversed());
  }

  return (
    <div>
      <h2>할일목록</h2>
      <div>
        <input 
          type="text" 
          value={todoText} 
          onChange={handleTodoTextChange} 
          onKeyDown={handleKeyDown}></input>
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <div>
        <select value={insertAt} onChange={(e) => setInsertAt(e.target.value)}>
          {todos.map((item, index)=>(
            <option key={item.id} value={index}>{index} 번째</option>
          ))}
        </select>
        <button onClick={handleAddTodoByIndex}>{insertAt} 번째 추가</button>
      </div>
      <div>Preview : {todoText}</div>
      <button onClick={handleReverse}>Reverse</button>
      <TodoList 
      todos={todos}
      onDeleteTodo={handleDeleteTodo}
      onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default AppTodo;
```



```jsx
import './AppCourse.css'
import CourseListCard from './components/course/CourseListCard';
import CourseForm from './components/course/CourseForm';
import {useState} from 'react';
import {useImmer} from 'use-immer';
function App() {

  const [items, setItems] = useState([
    {
      id:0,
      title: '입문자를 위한, HTML&CSS 웹 개발 입문',
      description: '웹 개발에 필요한 기본 지식을 배웁니다.',
      thumbnail: '/img/htmlcss.png',
      isFavorite: true,
      link: 'https://inf.run/JxyyT'
    },
    {
      id:1,
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      thumbnail: '/img/js.png',
      isFavorite: true,
      link: 'https://inf.run/Kpnd'
    },
    {
      id:2,
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      thumbnail: '/img/portfolio.png',
      isFavorite: false,
      link: 'https://inf.run/YkAN'

    }


  ])
  const favoriteItems = items.filter(item => item.isFavorite)

  const handleFavoriteChange = (id, isFavorite) => {
    const newItems = items.map(item => {
      if(item.id === id){
        return {
          ...item,
          isFavorite
        }
      }
      return item;
    })
    setItems(newItems);
  }

  return (
    <>
  <main style={{flexDirection:'column', gap:'1rem'}}>
    <CourseForm></CourseForm>
    <CourseListCard title="강의 목록" items={items} onFavorite={handleFavoriteChange}></CourseListCard>
    {/* <CourseListCard title="관심 강의" items={favoriteItems}></CourseListCard> */}
    
	</main>
    </>
  )
}

export default App

```

```jsx
import { Fragment } from 'react';
import Card from '../Card';
import CourseItem from './CourseItem';

function CourseListCard({title, items, onFavorite}) {

  const lastIndex = items.length - 1;
  return (
	//style={{backgroundColor : 'black', color : 'white'}

	<Card title={title}>
		<div className="courses">
			{items.map((item, index)=> 
				<Fragment key={item.id}>
					<CourseItem  {...item} onFavorite={onFavorite}/>
					{index !== lastIndex -1 && <hr className='divider'></hr>}
				</Fragment>
			)}
		</div>
	</Card>


  );
}

export default CourseListCard;
```

```jsx
function HeartIconBtn({onClick, isFavorite = false}){


	return(
		//onClick 안에 () 같이 쓰면 페이지 렌더링 될때 바로 실행됨
		//<button className="btn" onClick={()=>alert('헬로우')}>
		//<button className="btn" onClick={handleFavorite}>
			<button className="btn" onClick={(e)=> onClick(e)}>
			<img className="btn__img" src={isFavorite ? ("/img/heart-fill-icon.svg") : ("/img/heart-icon.svg")}/>
			
		</button>
	)
	
}

function LinkIconBtn({link}){
	return(
		<a className="btn" href={link} target="_blank" rel="noreferrer">
			<img className="btn__img" src="/img/link-icon.svg" alt=""></img>
		</a>
	)
}

export default function CourseItem({title, description, thumbnail, isFavorite, link, id, onFavorite}) {
	function handleFavorite(e){
		e.stopPropagation();
		onFavorite(id, !isFavorite);
		//alert(isFavorite ? '좋아요' : '모르겠어요');
	}

	function handleItemClick(e){
		e.stopPropagation();
		alert('item click ~!');
		open(link, '_blank');
	}
  return (

	<article className="course" onClick={handleItemClick}>
		<img className="course__img" src={thumbnail} alt="강의 이미지" />
		<div className="course__body">
			<div className="course__title">{title}</div>
			<div className="course__description">{description}</div>
		</div>
		<div className="course__icons">
			<HeartIconBtn isFavorite={isFavorite} onClick={handleFavorite}></HeartIconBtn>
			{link && <LinkIconBtn link={link}></LinkIconBtn>}

		</div>
	</article>

  );
}


```

- useImmer로 사용한 버전

```jsx
import './AppCourse.css'
import CourseListCard from './components/course/CourseListCard';
import CourseForm from './components/course/CourseForm';
import {useState} from 'react';
import {useImmer} from 'use-immer';
function App() {

  const [items, updateItems] = useImmer([
    {
      id:0,
      title: '입문자를 위한, HTML&CSS 웹 개발 입문',
      description: '웹 개발에 필요한 기본 지식을 배웁니다.',
      thumbnail: '/img/htmlcss.png',
      isFavorite: true,
      link: 'https://inf.run/JxyyT'
    },
    {
      id:1,
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      thumbnail: '/img/js.png',
      isFavorite: true,
      link: 'https://inf.run/Kpnd'
    },
    {
      id:2,
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      thumbnail: '/img/portfolio.png',
      isFavorite: false,
      link: 'https://inf.run/YkAN'

    }


  ])
  const favoriteItems = items.filter(item => item.isFavorite)

  const handleFavoriteChange = (id, isFavorite) => {
    updateItems((draft) => {
      const targetItem = draft.find(item => item.id === id);
      targetItem.isFavorite = isFavorite; 
    })
    // const newItems = items.map(item => {
    //   if(item.id === id){
    //     return {
    //       ...item,
    //       isFavorite
    //     }
    //   }
    //   return item;
    // })
    // setItems(newItems);
  }

  return (
    <>
  <main style={{flexDirection:'column', gap:'1rem'}}>
    <CourseForm></CourseForm>
    <CourseListCard title="강의 목록" items={items} onFavorite={handleFavoriteChange}></CourseListCard>
    {/* <CourseListCard title="관심 강의" items={favoriteItems}></CourseListCard> */}
    
	</main>
    </>
  )
}

export default App

```





### state로직을 reducer로 작성하기

- 한 컴포넌트에서  state 업데이트가 여러 이벤트 핸들러로 분산되는 경우가 있다. 이 경우 컴포넌트를 관리하기 어려워진다. 이 문제 해결을 위해 state를 업데이트하는 모든 로직을 reducer를 사용해 컴포넌트 외부로 단일 함수로 통합해 관리할 수 있다.

- switch 문을 사용하는게 일반적이다.

- reducer 폴더에 todo-reducer.js로 만들었다.

```
import {useReducer, useState} from 'react'


  //reducer 활용
  const [todos, dispatch] = useReducer(todoReducer, [
    {id:0, text:"HTML&CSS 공부하기", done:false},
    {id:1, text:"자바스크립트 공부하기", done:false}
  ])
  
  //밑에서 각 기능에 dispatch 해주기
  
  //reducer.js 파일 만들어서 각 본 기능을 넣어주기(switch문 활용)
```

```jsx
function yourReducer(state, action) {
  // React가 설정하게될 다음 state 값을 반환합니다.
}

//reducer 함수는 state에 대한 로직을 넣는 곳입니다. 이 함수는 현재의 state 값과 action 객체, 이렇게 두 개의 인자를 받고 다음 state 값을 반환합니다.
```





```jsx
export default function todoReducer(todos, action){

    //type
    switch(action.type){
      case 'added':{
        const {nextId, todoText} = action;
        return [
          ...todos,
          {id : nextId, text: todoText, done:false}
        ];
      }
      case 'added_index':{
        const {insertAt, nextId, todoText} = action;
        return [
          //삽입 지점 이전 항목
          //0부터 insertAt까지 잘라낸다.
          ...todos.slice(0, insertAt),
          {id:nextId, text: todoText, done:false},
          //삽입 지점 이후 항목
          ...todos.slice(insertAt)          
        ];
      }
      case 'deleted':{
        const {deleteId} = action
        return todos.filter(item => item.id !== deleteId);
      }
      case 'done':{
        const {id, done} = action;
        return todos.map(item => {
              if(item.id === id){
                return {...item, done};
              }
              return item;
            })
      }
      case 'reverse':{
          return todos.toReversed();
      }
      default:{
        throw Error('알 수 없는 액션 타입 : ' +  action.type);
      }
    }
}
```

```jsx
//AppTodo.jsx

import './App.css'
import {useReducer, useState} from 'react'
import TodoList from './components/todo/TodoList';
import todoReducer from './reducer/todo-reducer';

function AppTodo(props) {
  const [todoText, setTodoText] = useState('');

  //reducer 활용
  const [todos, dispatch] = useReducer(todoReducer, [
    {id:0, text:"HTML&CSS 공부하기", done:false},
    {id:1, text:"자바스크립트 공부하기", done:false}
  ])



  const [insertAt, setInsertAt] = useState(todos.length - 1);


  const handleTodoTextChange = (e) => {
      setTodoText(e.target.value);
  }
  //꼭! 새 배열 복사해서 넣기
  const handleAddTodo = () =>{
    dispatch({
      type:'added',
      nextId:todos.length,
      todoText
    })

    //아래 코드를 dispatch로 바꿈
    // const nextId = todos.length;
    // setTodos([
    //   ...todos,
    //   {id : nextId, text: todoText, done:false}
    // ])
    
    //여기서 input 내에 있는 값을 빈값으로 만들어주면 된다.
    setTodoText('');
  }

  const handleAddTodoByIndex = () => {

    dispatch({
      type:'added_index',
      insertAt,
      nextId:todos.length,
      todoText
    })
    //아래 코드를 dispatch로 바꿈
    // const nextId = todos.length;
    // const newTodos = [
    //   //삽입 지점 이전 항목
    //   //0부터 insertAt까지 잘라낸다.
    //   ...todos.slice(0, insertAt),
    //   {id:nextId, text: todoText, done:false},
    //   //삽입 지점 이후 항목
    //   ...todos.slice(insertAt)

    // ];
    // setTodos(newTodos);
    setTodoText('');
  }

  //기능을 자식 컴포넌트에서 만들 생각하지말고
  //부모 컴포넌트에서 props로 기능을 내려주면 된다.
  //삭제 기능
  const handleDeleteTodo = (deleteId) =>{

    dispatch({
      type:'deleted',
      deleteId
    })
    //filter 문법 확인!
    //해당하는 id의 값을 빼는거라고 생각하지말고
    //해당하는 id의 값만 빼고 반환하기
    // 아래 코드 dispatch 로 바꿈
    // const newTodos = todos.filter(item => item.id !== deleteId);
    // setTodos(newTodos);
  }
  //input에 포커스 되어있을때 enter키 누르면 추가되는 기능
  const handleKeyDown = (e) =>{
    if(e.key === "Enter"){
      handleAddTodo();
    }
  }
  //done여부를 true/false 바꾸는 기능
  const handleToggleTodo = (id, done) =>{
    // 아래 코드 dispatch 로 바꿈
    dispatch({
      type:'done',
      id,
      done
    })
    //기존 배열 안의 객체 속성을 변경!
    // const nextTodos = todos.map(item => {
    //   if(item.id === id){
    //     return {...item, done};
    //   }
    //   return item;
    // })
    // setTodos(nextTodos);
  }
  //배열 순서 뒤바꿈(꼭! reverse는 원본내용을 바꿔버리니까 원본을 복사해서 사용하자)
  const handleReverse = () => {
    // 아래 코드 dispatch 로 바꿈
    dispatch({
      type:'reverse'
    })


    //아래 주석처리된 내용은 reverse 사용시!
    // const nextTodos = [...todos];
    // nextTodos.reverse();
    // setTodos(nextTodos);
    
    //2023 최신 API에서는 toReversed 사용하면 배열의 순서를 거꾸로 한 새로운 배열을 반환한다.
    //setTodos(todos.toReversed());
  }

  return (
    <div>
      <h2>할일목록</h2>
      <div>
        <input 
          type="text" 
          value={todoText} 
          onChange={handleTodoTextChange} 
          onKeyDown={handleKeyDown}></input>
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <div>
        <select value={insertAt} onChange={(e) => setInsertAt(e.target.value)}>
          {todos.map((item, index)=>(
            <option key={item.id} value={index}>{index} 번째</option>
          ))}
        </select>
        <button onClick={handleAddTodoByIndex}>{insertAt} 번째 추가</button>
      </div>
      <div>Preview : {todoText}</div>
      <button onClick={handleReverse}>Reverse</button>
      <TodoList 
      todos={todos}
      onDeleteTodo={handleDeleteTodo}
      onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default AppTodo;


```



* immer를 활용한 버전

```jsx
import './App.css'
import {useReducer, useState} from 'react'
import TodoList from './components/todo/TodoList';
import todoReducer from './reducer/todo-reducer';
import {useImmerReducer} from 'use-immer';




function AppTodo(props) {
  const [todoText, setTodoText] = useState('');

  //reducer 활용
  const [todos, dispatch] = useImmerReducer(todoReducer, [
  //const [todos, dispatch] = useReducer(todoReducer, [
    {id:0, text:"HTML&CSS 공부하기", done:false},
    {id:1, text:"자바스크립트 공부하기", done:false}
  ])



  const [insertAt, setInsertAt] = useState(todos.length - 1);


  const handleTodoTextChange = (e) => {
      setTodoText(e.target.value);
  }
  //꼭! 새 배열 복사해서 넣기
  const handleAddTodo = () =>{
    dispatch({
      type:'added',
      nextId:todos.length,
      todoText
    })

    //아래 코드를 dispatch로 바꿈
    // const nextId = todos.length;
    // setTodos([
    //   ...todos,
    //   {id : nextId, text: todoText, done:false}
    // ])
    
    //여기서 input 내에 있는 값을 빈값으로 만들어주면 된다.
    setTodoText('');
  }

  const handleAddTodoByIndex = () => {

    dispatch({
      type:'added_index',
      insertAt,
      nextId:todos.length,
      todoText
    })
    //아래 코드를 dispatch로 바꿈
    // const nextId = todos.length;
    // const newTodos = [
    //   //삽입 지점 이전 항목
    //   //0부터 insertAt까지 잘라낸다.
    //   ...todos.slice(0, insertAt),
    //   {id:nextId, text: todoText, done:false},
    //   //삽입 지점 이후 항목
    //   ...todos.slice(insertAt)

    // ];
    // setTodos(newTodos);
    setTodoText('');
  }

  //기능을 자식 컴포넌트에서 만들 생각하지말고
  //부모 컴포넌트에서 props로 기능을 내려주면 된다.
  //삭제 기능
  const handleDeleteTodo = (deleteId) =>{

    dispatch({
      type:'deleted',
      deleteId
    })
    //filter 문법 확인!
    //해당하는 id의 값을 빼는거라고 생각하지말고
    //해당하는 id의 값만 빼고 반환하기
    // 아래 코드 dispatch 로 바꿈
    // const newTodos = todos.filter(item => item.id !== deleteId);
    // setTodos(newTodos);
  }
  //input에 포커스 되어있을때 enter키 누르면 추가되는 기능
  const handleKeyDown = (e) =>{
    if(e.key === "Enter"){
      handleAddTodo();
    }
  }
  //done여부를 true/false 바꾸는 기능
  const handleToggleTodo = (id, done) =>{
    // 아래 코드 dispatch 로 바꿈
    dispatch({
      type:'done',
      id,
      done
    })
    //기존 배열 안의 객체 속성을 변경!
    // const nextTodos = todos.map(item => {
    //   if(item.id === id){
    //     return {...item, done};
    //   }
    //   return item;
    // })
    // setTodos(nextTodos);
  }
  //배열 순서 뒤바꿈(꼭! reverse는 원본내용을 바꿔버리니까 원본을 복사해서 사용하자)
  const handleReverse = () => {
    // 아래 코드 dispatch 로 바꿈
    dispatch({
      type:'reverse'
    })


    //아래 주석처리된 내용은 reverse 사용시!
    // const nextTodos = [...todos];
    // nextTodos.reverse();
    // setTodos(nextTodos);
    
    //2023 최신 API에서는 toReversed 사용하면 배열의 순서를 거꾸로 한 새로운 배열을 반환한다.
    //setTodos(todos.toReversed());
  }

  return (
    <div>
      <h2>할일목록</h2>
      <div>
        <input 
          type="text" 
          value={todoText} 
          onChange={handleTodoTextChange} 
          onKeyDown={handleKeyDown}></input>
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <div>
        <select value={insertAt} onChange={(e) => setInsertAt(e.target.value)}>
          {todos.map((item, index)=>(
            <option key={item.id} value={index}>{index} 번째</option>
          ))}
        </select>
        <button onClick={handleAddTodoByIndex}>{insertAt} 번째 추가</button>
      </div>
      <div>Preview : {todoText}</div>
      <button onClick={handleReverse}>Reverse</button>
      <TodoList 
      todos={todos}
      onDeleteTodo={handleDeleteTodo}
      onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default AppTodo;
```

```jsx
export default function todoReducer(draft, action){
//export default function todoReducer(todos, action){

    
    //type
    switch(action.type){
      case 'added':{
        const {nextId, todoText} = action;
        draft.push({id : nextId, text: todoText, done:false});
        break;
        // return [
        //   ...todos,
        //   {id : nextId, text: todoText, done:false}
        // ];
      }
      case 'added_index':{
        const {insertAt, nextId, todoText} = action;
        //array.splice(startIndex(변경을 시작할 인덱스), deleteCount(삭제할 요소 개수), ...itemsToAdd(추가할 요소 (선택)))
        draft.splice(insertAt, 0, {id:nextId, text: todoText, done:false});
        break;
        // return [
        //   //삽입 지점 이전 항목
        //   //0부터 insertAt까지 잘라낸다.
        //   ...todos.slice(0, insertAt),
        //   {id:nextId, text: todoText, done:false},
        //   //삽입 지점 이후 항목
        //   ...todos.slice(insertAt)          
        // ];
      }
      case 'deleted':{
        const {deleteId} = action
        return draft.filter(item => item.id !== deleteId);
        //return todos.filter(item => item.id !== deleteId);
      }
      case 'done':{
        const {id, done} = action;
        const target = draft.find(item => item.id === id);
        target.done = done;
        // return todos.map(item => {
        //       if(item.id === id){
        //         return {...item, done};
        //       }
        //       return item;
        //     })
      }
      case 'reverse':{
        return draft.toReversed();
        //return todos.toReversed();
      }
      default:{
        throw Error('알 수 없는 액션 타입 : ' +  action.type);
      }
    }
}
```

