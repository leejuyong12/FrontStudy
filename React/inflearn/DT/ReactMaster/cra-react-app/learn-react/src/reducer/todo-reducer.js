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