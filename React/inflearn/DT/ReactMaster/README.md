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

