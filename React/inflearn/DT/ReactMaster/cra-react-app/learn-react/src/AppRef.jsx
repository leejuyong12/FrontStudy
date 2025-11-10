import {useRef, useState, useEffect, use} from 'react';


function ButtonCounter(){
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    countRef.current++;
    console.log('countRef: ' + countRef.current

    );
    setCount(count + 1);
  }
  
  return(
    <button onClick={handleClick}>Count</button>
  )
}

const MyForm = forwardRef((props, ref) => {
  const [form, setForm] = useState({
    title : '제목',
    author: '짐코딩',
    content: ''
  });

  const handleForm = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name] : value,
    })
  }

  const titleInputRef = useRef(null);
  const authorInputRef = useRef(null);
  const contentTextareaRef = useRef(null);
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('DOM : ', titleInputRef.current);

    if(!form.title){
      titleInputRef.current.focus();
    }else if(!form.author){
      authorInputRef.current.focus();
    }else if(!form.content){
      contentTextareaRef.current.focus();
    }else{
      console.log('성공~');
    }
  }

  useEffect(()=>{
    if(!form.title){
      titleInputRef.current.focus();
      return;
    }
    if(!form.author){
      authorInputRef.current.focus();
      return;
    }
    if(!form.content){
      contentTextareaRef.current.focus();
      return;
    }
  },[])

  const [isChanged, setIsChanged] = useState(false);
  const prevForm = useRef(null);

  useEffect(()=>{
    //server api fetch (서버 정보를 받아왔다고 가정)
    prevForm.current = {...form };

    console.log('formRef:' , formRef);
  },[]);

  useEffect(()=>{
    //제목이 바뀔때마다 체크
    const hasChanged = (
      prevForm.current.title !== form.title ||
      prevForm.current.content !== form.content ||
      prevForm.current.author !== form.author
  )
    setIsChanged(hasChanged);
  },[form])

  const formRef = useRef(null);

  return(
    <form ref={ref} onSubmit={handleSubmit}>
      <fieldset>
        <legend>글쓰기</legend>
        <input ref={titleInputRef} name="title" placeholder="제목" value={form.title} onChange={handleForm}></input>
        <hr></hr>
        <input ref={authorInputRef} name="author" placeholder="작성자" value={form.author} onChange={handleForm}></input>
        <hr></hr>
        <textarea ref={contentTextareaRef} name="content" placeholder="내용" value={form.content} onChange={handleForm}/>
        <hr></hr>
        <button disabled={!isChanged}>전송</button>
      </fieldset>
    </form>
  )

})

export default function AppRef(){

  const myFormRef = useRef(null);


  return(
    <>
      <h2>Count</h2>
      <ButtonCounter></ButtonCounter>
      <ButtonCounter></ButtonCounter>

      <h2>Form</h2>
      <MyForm ref={myFormRef}></MyForm>
    </>
  )
}