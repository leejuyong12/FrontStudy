var 이름 = 'kim'; //이름이라는 변수에는 string 타입만 들어올수 있다.
var 이름2 = ['kim', 'park']; //이름2이라는 변수에는 string타입이 들어간 배열만 들어올 수 있다.
var 이름3 = { name: 'kim' }; //object변수, ?는 name이라는 속성이 들어올수도 있고 아닐수도 있다라는 뜻
var 이름4 = 123; // 이름4 타입에는 string 혹은 number
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
