import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
    id : number;
    date : number;
    text : string;
    done : boolean;
}

let todoSlice = createSlice({
    name : "todo",
    initialState : [] as Todo[], //redux 상태의 최초 값(초기값), [] as Todo[] 는 Todo 타입만 들어오게하는 타입스크립트 문법
    reducers : { //상태를 바꾸는 함수들의 모음집, 상태를 어떻게 바꿀지 정의
        //추가
        addTodo(state, action : PayloadAction<string>){
            const nextId = state.length === 0 ? 1 : state[state.length -1].id + 1;
            state.push({
                id : nextId,
                text : action.payload,
                done : false,
                date : Date.now()
            });
        },
        //done 변경
        toggleTodo(state, action : PayloadAction<number>){
            const target = state.find(t => t.id === action.payload);
            if(target){
                target.done = !target.done;
            }
        },
        //수정
        updateTodo(state, action : PayloadAction<{id:number; text:string; done:boolean;}>){
            const target = state.find(t => t.id === action.payload.id)
            if(target){
                target.text = action.payload.text;
                target.done = action.payload.done;
            }
        }
    }    

});

export const {addTodo, toggleTodo, updateTodo} = todoSlice.actions; //todoSlice 안에 있는 reducer 함수를 외부에서 사용하게끔

//Redux 저장소(전역 상태 창고)를 만드는 부분
//“todo라는 이름의 상태 영역을 만들고, 그 영역은 todoSlice가 관리하게 할게”
const store = configureStore({
    reducer : {
        todo : todoSlice.reducer
    }
});

//타입스크립트
export type RootState = ReturnType<typeof store.getState>; //Redux 전체 상태 타입을 자동으로 뽑아주는 코드
export type AppDispatch = typeof store.dispatch;//dispatch의 타입을 만들어둠
export default store;