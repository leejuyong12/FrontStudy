function HeartIconBtn({handleFavorite, isFavorite = false}){


	return(
		//onClick 안에 () 같이 쓰면 페이지 렌더링 될때 바로 실행됨
		//<button className="btn" onClick={()=>alert('헬로우')}>
		<button className="btn" onClick={handleFavorite}>
			<img className="btn__img" src={isFavorite ? ("/img/heart-fill-icon.svg") : ("/img/heart-icon.svg")}/>
			
		</button>
	)
	
}

function LinkIconBtn({link}){
	return(
		<a className="btn" href={link} target="_blank" rel="noreferrer">
			<img className="btn__img" src="/img/link-icon.svg" alt=""></img>
		</a>
	)
}

export default function CourseItem({title, description, thumbnail, isFavorite, link}) {
	function handleFavorite(){
		alert(isFavorite ? '좋아요' : '모르겠어요');
	}
  return (

	<article className="course">
		<img className="course__img" src={thumbnail} alt="강의 이미지" />
		<div className="course__body">
			<div className="course__title">{title}</div>
			<div className="course__description">{description}</div>
		</div>
		<div className="course__icons">
			<HeartIconBtn isFavorite={isFavorite} handleFavorite={handleFavorite}></HeartIconBtn>
			{link && <LinkIconBtn link={link}></LinkIconBtn>}

		</div>
	</article>

  );
}

