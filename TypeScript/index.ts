let 이름 : string = 'kim'; //이름이라는 변수에는 string 타입만 들어올수 있다.
let 이름2 : string[] = ['kim', 'park']; //이름2이라는 변수에는 string타입이 들어간 배열만 들어올 수 있다.
let 이름3 : {name? : string} = {name : 'kim'}; //object변수, ?는 name이라는 속성이 들어올수도 있고 아닐수도 있다라는 뜻

let 이름4 : string | number = 123; // 이름4 타입에는 string 혹은 number

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