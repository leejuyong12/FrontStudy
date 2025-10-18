//함수는 알던 그대로
//타입 지정된 파라미터는 필수로 입력해야한다.
//파라미터가 옵션일 경우에는 뒤에 물음표 붙이면 된다.
// function fn(x? : number) : number{    이런식 이건 또  오른쪽과 같다. function fn(x : number | undefined) : number{
function fn(x) {
    return x * 2;
}
fn(30);
//void 타입 활용 가능(return이 없을때, void로 지정하면 return 허용 안된다)
function fn2(x) {
    1 + 1;
}
//아래가 안되는 이유는 x가 number | string이라는 새로운 타입인거니깐 x+3이 안되는거다.
//string + number(가능), number + number(가능), number|string + number(불가능)  -> 이제 가능하게 하는건 Narrowing & Assertion을 알아야한다.
//숙제 밑으로 갈것.
function fn3(x) {
    //console.log(x + 3)
}
fn3(2);
//숙제
//1.
function fn4(x) {
    if (x) {
        console.log('안녕하세요 ' + x);
    }
    else {
        console.log('이름이 없습니다');
    }
}
//2.
function fn5(x) {
    return x.toString().length;
}
//3. tip 타입스크립트에서는 == 대신에 ===, != 대신에 !== 를 권장한다. 이유는 자바스크립트로 컴파일하고 나서도 타입 안정선을 보장할 수 있기 때문에.
function fn6(x, y, z) {
    //x는 만원당 1점, 집보유시 500점 아니면 0점, 매력점수는 '상'일때만 100점
    var total = 0;
    total += x;
    if (y === true) {
        total += 500;
    }
    if (z === '상') {
        total += 100;
    }
    if (total >= 600) {
        return '결혼가능';
    }
}
//타입 확정하기 Narrowing & Assertion
//타입이 아직 하나로 확정되지 않았을 경우 Type Narrowing을 써야한다.
//대표적인 Narrowing 방법은 typeof 연산자
//다른 방법은   속성명 in 오브젝트자료      혹은     인스턴스 instanceof 부모
function fn7(x) {
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
}
fn7(2);
function fn8(x) {
    var array = [];
    // *** if문 주의 *** if문은 썼으면 끝까지 써야 안전. else 나 else if 안쓰면 에러로 잡을수도 있다.
    if (typeof x === 'number') {
        array[0] = x;
    }
}
fn8(2);
//assertion 문법(타입 덮어쓰기)
//함부로 쓰다가는 빠따 맞는다.
//맞는 용도
//1. Narrowing 할때 쓴다.
//2. 무슨 타입이 들어올지 100% 확실할때 쓴다.(그래서 이 이유때문에 굳이 assertion 쓸 필요가 없다, 비상용이다)
function fn9(x) {
    var array = [];
    array[0] = x; //assertion문법
    //<number>array[0]    -> 예전 as문법
}
//1번 예시
var 예시1 = 'kim';
//예시1 as number;  -> 이러면 에러난다. 타입을 변경하는 용도가 아니다.
fn9(2);
function 변환기(data) {
    return JSON.parse(data);
}
var jake = 변환기('{"name":"kim"}');
//숙제
//1.
function fn10(a) {
    var result = [];
    a.forEach(function (b) {
        if (typeof b === 'string') {
            result.push(parseFloat(b));
        }
        else {
            result.push(b);
        }
    });
    return result;
}
console.log(fn10([123, '10']));
//2. 
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
function fn11(x) {
    if (typeof x.subject === 'string') {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return 'nono';
    }
}
var 동물 = 123;
var 식물 = { name: 'kim', age: 20 };
//const(변경 불가능하다)
var 출생지역 = 'seoul';
//출생지역 = 'busan'; -> 불가
//대신 object 내용은 변경 가능하다. -> readonly 쓰면 object 자료수정도 막을 수 있다.(실수로 수정하면 에러내줌, 실행을 막아주지는 않음)
var 탄생지역 = { region: 'seoul' };
탄생지역.region = 'busan';
var 노래 = { name: '링딩동' };
var position = { x: 10, y: 20 };
var 숙제2입니까 = { size: 123, position: [1, 2, 3] };
