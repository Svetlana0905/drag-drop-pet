import '../css/app.scss';

export const Popup = (props) => {
   let countBoard = props.data.countboard,
      ClosePopup = props.data.closePopup,
      stylePopup = props.data.style,
      articul = props.data.articul,
      ClickHandler = props.data.ClickHandler,
      getCurrentBoard = props.data.getCurrentBoard;

   return (
      <div className={stylePopup}>
         <button className='close-btn' onClick={ClosePopup} >X</button>
         <p className='popup__title'>Артикул: <b>{articul}</b></p>
         <p className='popup__subtitle item__title'>Куда переместить</p>
         <select className='popup__select' onChange={getCurrentBoard}>
            {countBoard.map((board, id) =>
               <option key={id} value={id}>{id + 1}</option>
            )}
         </select >
         <button className='item__btn' onClick={ClickHandler}>Переместить</button>
      </div>
   )
}