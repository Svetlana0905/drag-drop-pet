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
   const [currentBoard, setCurrentBoard] = useState(1) // доска КУДА выбор через select
   const [boardFrom, setBoardFrom] = useState()
   const [itemId, setItemId] = useState()
   const [fulItem, setFulItem] = useState({})

   function getCurrentBoard(e) {
      setCurrentBoard(+e.target.value + 1)
   }

   function OpenPopup(e, articul, board, item, indexItem) {
      setArticul(articul)
      setBoardFrom(board)
      setItemId(indexItem)
      setFulItem(item)
      if (!e.target.classList.contains('item__btn')) {
         setStylePopup('popup-block active-moving')
      }
   }

   function ClickHandler() {
      const data = {
         'boardFrom': boardFrom.id,
         'boardTo': currentBoard,
         'item': fulItem,
         'itemId': itemId,
      }
      dispath(movingItem(data))
      setStylePopup('hidden')
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
      'ClickHandler': ClickHandler,
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
                           onClick={e => OpenPopup(e, item.articul, board, item, indexItem)}
                        >
                           <p className='item__title'><i>Артикул:</i></p>
                           <p className='item__articul'>{item.articul}</p>
                           <p className='item__image'><img className='item__img' src={item.icon} alt={item.name} /></p>
                        </div>
                     )}
                  </div>
               </div>
            )}
         </div>
      </div >
   )
}