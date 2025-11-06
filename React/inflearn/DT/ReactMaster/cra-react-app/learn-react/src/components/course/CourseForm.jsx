import Card from '../Card';
import {useState} from 'react';

export default function CourseForm(){
  const [form, setForm] = useState({
    title:'리액트 강의',
    description: '리액트 기초부터 실전까지'
  })
  function handleCourseForm(e){
    e.preventDefault();
  }
  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
      //description:form.description
    });
  }

  return(
    <Card title="강의 등록">
      <form style={{display:'flex', flexDirection:'column', gap:'1rem'}} onSubmit={handleCourseForm}>
        <input name="title" type="text" placeholder="강의 제목" title={form.title} onChange={handleChange}/>
        <input name="description" type="text" placeholder="강의 한줄 설명" description={form.description} onChange={handleChange}/>
        <input type="submit" placeholder="등록"/>

        {(form.title || form.description) && (
          <div style={{marginTop: '16px', padding: '16px', backgroundColor: '#eee', borderRadius: '6px' }}>
            {form.title && (<p>제목 - {form.title}</p>)}
            {form.description && (<p>설명 - {form.description}</p>)}
          </div>
        )}
        </form>
    </Card>
  )
}