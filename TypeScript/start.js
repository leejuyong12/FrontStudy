//순서
//1. node.js 최신버전 설치
//2. npm install -g typescript
//3. tsconfig.json 파일 생성
//4. ~~.ts파일에 코딩 시작
//5. 터미널에 tsc -w 해둔 채로 시작 (typescript를 javascript버전으로 변환해서 만들어준다)
var 이름 = 'kim'; //이름이라는 변수에는 string 타입만 들어올수 있다.
var 이름2 = ['kim', 'park']; //이름2이라는 변수에는 string타입이 들어간 배열만 들어올 수 있다.
var 이름3 = { name: 'kim' }; //object변수, ?는 name이라는 속성이 들어올수도 있고 아닐수도 있다라는 뜻
var 이름3_1 = { member1: 'kim', member2: 123 };
var 이름4 = 123; //Union Type(여러개중에 선택됨, 하지만 string|number라는 새로운 타입인거다.) 이름4 타입에는 string 혹은 number
이름4 = '회원';
var 이름4_0;
// 이름4_0 + 1 -> 이거 안된다. 왜냐하면 string타입+1 (가능), number타입+1(가능), string|number타입+1(안돼!)
var 이름4_1 = 'park'; //굳이 지정 안해도 타입지정 자동으로 된다. 커서 올려보면 나옴
var 회원들 = [1, '2', 3];
var 오브젝트 = { a: 123 };
//any타입은 타입실드 해제문법이다. 일반 js변수로 만들고 싶으면 any타입을 쓴다.
var 애니;
애니 = '아무거나';
애니 = 112233;
// unknown타입이 any보다 안전한 이유는 다 받아주지만 매칭이 안되면 에러를 낸다.
var 언노운;
언노운 = '아무거나';
언노운 = 112233;
// let 언노운테스트 : string = 언노운;  -> 이러면 에러난다.
// 타입스크립트는 간단한 수학연산도 타입이 맞아야 한다.(엄격!!!!!!!!!!!!) 나중에 Narrowing 이나 Assertion 배워서 엄격하게 코드짜면 된다.
var 언노운테스트2;
// 언노운테스트2 - 1 -> 못하게 되어있다.(unknown은 number 타입이 아님)
var 언디파인드 = undefined; //undefined 혹은 숫자도 들어올수 있게
var 유저요 = 'kim';
var 결혼여부 = false;
var 누구지 = [언디파인드, 유저요, 결혼여부];
var 이름5 = 123;
function 함수(x) {
    return x * 2;
}
var john = [123, true];
var john2 = { name: 'kim', age: '123' };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var 이름입니다 = '이땡땡';
var 나이입니다 = 486;
var 지역입니다 = '저멀리';
var 좋아하는노래는 = { music1: 'gogo', music2: '123456' };
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true
};
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
