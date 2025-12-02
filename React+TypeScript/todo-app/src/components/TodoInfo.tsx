import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";


function TodoInfo() {

    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const { text, done } = location.state || {};
    //수정가능 여부
    const [isEdit, setIsEdit] = useState(false);

    //수정할 값들
    const [editText, setEditText] = useState(text);
    const [editDone, setEditDone] = useState(done);

    const goList = () => {
        navigate("/")
    }

    //저장
    const onSave = () => {
        alert('저장했지만 전역 데이터 관리가 아니기 때문에 저장이 안됨')
        setIsEdit(false);
    }

    //취소
    const onCancel = () => {
        setEditText(text);
        setEditDone(done);
        setIsEdit(false);
    }
    return (
	<div>
		<h2>{Number(id) + 1}번째 할 일</h2>
		
		{/* 보기 모드 */}
		{!isEdit && (
			<>
				<p>{text}</p>
				<p style={{color : done ? "blue" : "red"}}>
					{done ? "완료" : "미완료"}
				</p>
				<button onClick={()=>setIsEdit(true)}>수정</button>
				<button onClick={goList}>목록</button>
			</>
		)}
		
		{/* 수정 모드 */}
        {isEdit && (
			<>
				<input
					value={editText}
					onChange={(e)=>{
						setEditText(e.target.value)
					}}
				/>
				<label>
					<input
						type="checkbox"
						checked={editDone}
						onChange={(e)=>{
							setEditDone(e.target.checked)
						}}
                    />
					완료여부
				</label>

            <button onClick={onSave}>저장</button>
            <button onClick={onCancel}>취소</button>
			</>
		)}

	</div>
    );
}

export default TodoInfo;