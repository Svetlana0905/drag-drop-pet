import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from '../store/elementsSlice';
import { movingItem } from '../store/elementsSlice';
import { Popup } from '../Components/Popup';

export const MovingMobile = () => {
   const dispath = useDispatch()
   const arrItem = useSelector(selectItems)
   const [boards, setBoards] = useState(arrItem)
   const [stylePopup, setStylePopup] = useState('hidden')
   const [articul, setArticul] = useState('')
   const [currentBoard, setCurrentBoard] = useState(null) // доска КУДА выбор через select


   function getCurrentBoard(e) {
      setCurrentBoard(+e.target.value + 1)
   }

   function OpenPopup(e, articul) {
      setArticul(articul)
      setCurrentBoard(null)
      if (!e.target.classList.contains('item__btn')) {
         setStylePopup('popup-block active-moving')
      }
   }

   function ClickHandler(e, board, item, indexItem) {
      if (currentBoard !== null) {
         const data = {
            'boardFrom': board.id,
            'boardTo': currentBoard,
            'item': item,
            'itemId': indexItem,
         }
         dispath(movingItem(data))
         setStylePopup('hidden')
      }
   }

   function ClosePopup() {
      setStylePopup('hidden')
   }
   useEffect(() => {
      setBoards(arrItem);
   }, [arrItem]);


   const data = {
      'articul': articul,
      'countboard': arrItem,
      'closePopup': ClosePopup,
      'style': stylePopup,
      'getCurrentBoard': getCurrentBoard,
   }

   return (

      <div className='column room'>
         <Popup data={data} />
         <h3 >Комнаты</h3>
         <div className='room__inner'>
            {boards.map(board =>
               <div key={board.id} className='column column__board'
               >
                  <h4>Room {board.id}</h4>
                  <div className='inner'>
                     {board.items.map((item, indexItem) =>
                        <div key={item.articul}
                           className='item'
                           onClick={e => OpenPopup(e, item.articul)}
                        >
                           <p className='item__title'><i>Артикул:</i></p>
                           <p className='item__articul'>{item.articul}</p>
                           <p className='item__image'><img className='item__img' src={item.icon} alt={item.name} /></p>
                           <button className='item__btn' onClick={e => ClickHandler(e, board, item, indexItem)}>Переместить</button>
                        </div>
                     )}
                  </div>
               </div>
            )}
         </div>
      </div >
   )
}