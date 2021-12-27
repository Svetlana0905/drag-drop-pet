import '../css/app.scss';

export const Popup = (props) => {
   let countBoard = props.data.countboard,
      ClosePopup = props.data.closePopup,
      stylePopup = props.data.style,
      articul = props.data.articul,
      getCurrentBoard = props.data.getCurrentBoard;

   return (
      <div className={stylePopup}>
         <button className='close-btn' onClick={ClosePopup} >X</button>
         <h5 className='popup__title'>Артикул: <span>{articul}</span></h5>
         <p className='popup__subtitle item__title'>Куда переместить</p>
         <select className='popup__select' onChange={getCurrentBoard}>
            {countBoard.map((board, id) =>
               <option key={id} value={id}>{id + 1}</option>
            )}
         </select >
      </div>
   )
}