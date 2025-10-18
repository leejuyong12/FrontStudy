//함수는 알던 그대로
//타입 지정된 파라미터는 필수로 입력해야한다.
//파라미터가 옵션일 경우에는 뒤에 물음표 붙이면 된다.
// function fn(x? : number) : number{    이런식 이건 또  오른쪽과 같다. function fn(x : number | undefined) : number{
function fn(x : number) :number {
    return x * 2
}
fn(30)

//void 타입 활용 가능(return이 없을때, void로 지정하면 return 허용 안된다)
function fn2(x : number) : void{
    1 + 1
}

//아래가 안되는 이유는 x가 number | string이라는 새로운 타입인거니깐 x+3이 안되는거다.
//string + number(가능), number + number(가능), number|string + number(불가능)  -> 이제 가능하게 하는건 Narrowing & Assertion을 알아야한다.
//숙제 밑으로 갈것.
function fn3(x : number | string) : void {
    //console.log(x + 3)
}
fn3(2)

//숙제
//1.
function fn4(x? : string): void{
    if(x){
        console.log('안녕하세요 ' + x)
    }else{
        console.log('이름이 없습니다')
    }
}
//2.
function fn5(x:number | string) : number{
    return x.toString().length
}
//3. tip 타입스크립트에서는 == 대신에 ===, != 대신에 !== 를 권장한다. 이유는 자바스크립트로 컴파일하고 나서도 타입 안정선을 보장할 수 있기 때문에.
function fn6(x:number, y:boolean, z:string) : string|void{
    //x는 만원당 1점, 집보유시 500점 아니면 0점, 매력점수는 '상'일때만 100점
    let total : number = 0
    total += x
    if(y === true){
        total += 500
    }
    if(z === '상'){
        total += 100
    }

    if(total >= 600){
        return '결혼가능'
    }
}

//타입 확정하기 Narrowing & Assertion
//타입이 아직 하나로 확정되지 않았을 경우 Type Narrowing을 써야한다.
//대표적인 Narrowing 방법은 typeof 연산자
//다른 방법은   속성명 in 오브젝트자료      혹은     인스턴스 instanceof 부모
function fn7(x : number | string){
    if(typeof x === 'string'){
        return x + '1'
    }else{
        return x + 1
    }
}
fn7(2)

function fn8(x : number | string){
   let array : number[] = [];
   // *** if문 주의 *** if문은 썼으면 끝까지 써야 안전. else 나 else if 안쓰면 에러로 잡을수도 있다.
   if(typeof x === 'number'){
        array[0] = x;
   } 
}
fn8(2)

//assertion 문법(타입 덮어쓰기)
//함부로 쓰다가는 빠따 맞는다.
//맞는 용도
//1. Narrowing 할때 쓴다.
//2. 무슨 타입이 들어올지 100% 확실할때 쓴다.(그래서 이 이유때문에 굳이 assertion 쓸 필요가 없다, 비상용이다)
function fn9(x : number | string){
   let array : number[] = [];
   array[0] = x as number; //assertion문법
   //<number>array[0]    -> 예전 as문법
}
//1번 예시
let 예시1:string = 'kim';
//예시1 as number;  -> 이러면 에러난다. 타입을 변경하는 용도가 아니다.
fn9(2)


//as가 유용하게 쓰일때 -> 타입을 강제로 부여하는 기능을 만들때
type Person = {
    name : string
}
function 변환기<T>(data: string): T {
    return JSON.parse(data) as T;
}
const jake = 변환기<Person>('{"name":"kim"}');

//숙제
//1.
function fn10(a:(number|string)[]){
    let result : number[] = [];
    a.forEach((b)=>{
        if(typeof b === 'string'){
            result.push(parseFloat(b))
        }else{
            result.push(b)
        }
    })
    return result
}
console.log(fn10([123, '10']))
//2. 
let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function fn11(x: {subject : string | string[]}){
    if(typeof x.subject === 'string'){
        return x.subject
    }else if(Array.isArray(x.subject)){
        return x.subject[x.subject.length -1]
    }else{
        return 'nono'
    }
}


//타입도 변수에 담아서 쓴다.(대문자로 시작, type을 붙이거나 - AnimalType)
type Animal = string | number | undefined;
let 동물 :Animal = 123;

type Plant = {name : string , age : number}
let 식물:Plant = {name : 'kim', age:20}


//const(변경 불가능하다)
const 출생지역 = 'seoul';
//출생지역 = 'busan'; -> 불가
//대신 object 내용은 변경 가능하다. -> readonly 쓰면 object 자료수정도 막을 수 있다.(실수로 수정하면 에러내줌, 실행을 막아주지는 않음)
const 탄생지역 = {region : 'seoul'}
탄생지역.region = 'busan';

type Song = {readonly name : string} //name? object안에도 ? 쓸수 있다.
const 노래:Song = { name : '링딩동'}

//type변수는 union type으로 합치기 가능
type Tag = String;
type Num = number;
type Total = Tag | Num;

//& 연산자로 object 타입 합치기(=extend하기)
type PositionX = {x : number};
type PositionY = {y : number};
type NewType = PositionX & PositionY

let position: NewType = {x: 10, y:20}

//(참고) 같은 이름의 type 변수 재정의 불가능

//숙제1. object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
//숙제2 다음 조건을 만족하는 타입을 만들어봅시다. 
    //1. 이 타입은 object 자료형이어야합니다.
    //2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
    //3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
    //4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.
    //type alias로 만들어보셈 
type HomeWork2Type = {color? : string, size : number, readonly position: number[] }
let 숙제2입니까:HomeWork2Type = {size:123, position:[1,2,3]}

//다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
    //1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
    //2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
    //3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.
type HomeWork3Type = {name : string, phone:number, email:string}

//다음을 만족하는 type alias를 만들어보십시오.
    //1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
    //2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
    //3. 멋있게 숙제3에서 만들어둔 type alias를 재활용해봅시다.
type HomeWork4Type = {under19:boolean}
type HomeWork34Type = HomeWork3Type & HomeWork4Type


