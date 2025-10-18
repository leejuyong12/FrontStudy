var 이이름;
//엄격한 타입지정 가능 Literal types   ex) 'kim' 문자만 들어올수 있다
var 엄격이이름;
var 접니다;
function 엄격함수(a) {
    return 1;
    //return 543 <- 안됨
}
//퀴즈
//1. 가위 or 바위 or 보 중 1개 입력가능
//2. 가위 or 바위 or 보 만 들어올 수 있는 array를 return 해야함
function 오늘의퀴즈(x) {
    return ['가위'];
}
오늘의퀴즈('가위');
var 자료 = {
    name: 'kim'
}; //as const 붙이면 아래 오류가 안난다. -> 효과 1. object value 값을 그대로 타입으로 지정해줌, 효과 2. object 속성들에 모두 readonly 붙여줌
function 내함수(a) {
}
//내함수(자료.name)   -> 오류난다   자료.name은 string 타입이므로 에러가 난다.
//위의 에러 잡는법
//1. object 만들 때 타입을 잘 미리 정하든가 
//2. 예전에 배웠던 assertion을 쓰시든가 (as 'kim' 이런걸 붙이는 겁니다)
//3. 아니면 as const 라는걸 애초에 object 자료에 붙일 수 있습니다. 
