//순서
//1. node.js 최신버전 설치
//2. npm install -g typescript
//3. tsconfig.json 파일 생성
//4. ~~.ts파일에 코딩 시작
//5. 터미널에 tsc -w 해둔 채로 시작 (typescript를 javascript버전으로 변환해서 만들어준다)


let 이름 : string = 'kim'; //이름이라는 변수에는 string 타입만 들어올수 있다.
let 이름2 : string[] = ['kim', 'park']; //이름2이라는 변수에는 string타입이 들어간 배열만 들어올 수 있다.
let 이름3 : {name? : string} = {name : 'kim'}; //object변수, ?는 name이라는 속성이 들어올수도 있고 아닐수도 있다라는 뜻
let 이름3_1 : {member1 : string, member2 : number} = {member1 : 'kim', member2 : 123}
let 이름4 : string | number = 123; //Union Type(여러개중에 선택됨, 하지만 string|number라는 새로운 타입인거다.) 이름4 타입에는 string 혹은 number
이름4 = '회원';

let 이름4_0 : string | number;
// 이름4_0 + 1 -> 이거 안된다. 왜냐하면 string타입+1 (가능), number타입+1(가능), string|number타입+1(안돼!)


let 이름4_1 = 'park' //굳이 지정 안해도 타입지정 자동으로 된다. 커서 올려보면 나옴

let 회원들 : (number | string)[] = [1, '2', 3];
let 오브젝트 : {a : string | number} = {a : 123};

//any타입은 타입실드 해제문법이다. 일반 js변수로 만들고 싶으면 any타입을 쓴다.
let 애니 : any;
애니 = '아무거나';
애니 = 112233;

// unknown타입이 any보다 안전한 이유는 다 받아주지만 매칭이 안되면 에러를 낸다.
let 언노운 : unknown;
언노운 = '아무거나';
언노운 = 112233;
// let 언노운테스트 : string = 언노운;  -> 이러면 에러난다.

// 타입스크립트는 간단한 수학연산도 타입이 맞아야 한다.(엄격!!!!!!!!!!!!) 나중에 Narrowing 이나 Assertion 배워서 엄격하게 코드짜면 된다.
let 언노운테스트2: unknown;
// 언노운테스트2 - 1 -> 못하게 되어있다.(unknown은 number 타입이 아님)

let 언디파인드 : undefined|number = undefined; //undefined 혹은 숫자도 들어올수 있게
let 유저요 : string = 'kim';
let 결혼여부 : boolean = false;
let 누구지 :(undefined|number|string|boolean)[] = [언디파인드, 유저요, 결혼여부];



type Name = string | number;
let 이름5 : Name = 123;

function 함수(x : number) :number{ //뒤에는 return 값
    return x * 2 
}

//tuple타입 : 튜플은 길이와 각 요소마다의 타입이 고정된 배열이다
type Member = [number, boolean];
let john:Member = [123, true];

type Member2 = {
    //글자로 된 모든 object 속성의 타입은 :string
    [key: string] : string,
}
let john2 : Member2 = {name : 'kim', age : '123'}

class User{
    name : string;
    constructor(name : string){
        this.name = name;
    }
}


let 이름입니다 : string = '이땡땡';
let 나이입니다 : number = 486;
let 지역입니다 : string = '저멀리';

let 좋아하는노래는 : {music1 : string, music2 : string} = {music1 : 'gogo', music2: '123456'};


let project: {
    member : string[],
    days : number,
    started : boolean
  } 
  = {
  member : ['kim', 'park'],
  days : 30,
  started : true
}



let 학교:{
    score : (number|boolean)[],
    teacher: string,
    friend: string|(string[])

} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

