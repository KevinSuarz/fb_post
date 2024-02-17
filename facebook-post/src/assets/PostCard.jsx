
export function PostCard (){
  return(
    <div className="postCard__container">
      <div className="postCard__header">
        <img src="" alt="" className="postCard__header__profileImg"/>
        <div className="postCard__header__data">
          <h5 className="postCard__header__data">KevinDevin</h5>
          <p className="postCard__header__time">ahora</p>
        </div>
      </div>
      <div className="postCard__body">
        <img src="" alt="" className="postCard__body__img"/>
      </div>
      <div className="postCard__footer">
        <div className="postCard__footer__button like__button">Like</div>
        <div className="postCard__footer__button coment__button">Coment</div>
        <div className="postCard__footer__button share__button">Share</div>
      </div>
    </div>
  )
}