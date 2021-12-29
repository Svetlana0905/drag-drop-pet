import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from '../store/elementsSlice';
import { movingItem } from '../store/elementsSlice';


export const MovingItem = () => {
   const dispath = useDispatch()
   const arrItem = useSelector(selectItems)
   const [boards, setBoards] = useState(arrItem)
   const [currentBoard, setCurrentBoard] = useState(null) // доска {id: 1, items: Array(2)}
   const [currentItem, setCurrentItem] = useState(null)  // элемент {articul: 'ngd7gse4e', name: 'стол', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA', color: 'black'}


   function dragOverHandler(e) { //элемент оказывается над зоной, принимающей перетаскиваемые элементы.
      e.preventDefault()
      if (e.target.className === 'item') {
         e.target.style.boxShadow = '0 4px 3px gray'
      }
   }
   function dragLeaveHandler(e) { //курсор мыши выходит за пределы элемента.
      e.target.style.boxShadow = 'none'
   }
   function dragStartHandler(e, board, item) { //элемент начал перемещаться.используется для сохранения информации о перемещаем омобъекте
      setCurrentBoard(board)
      setCurrentItem(item)
   }
   function dragEndHandler(e) {  //завершается перетаскивание
      e.target.style.boxShadow = 'none'
   }
   function dropHandler(e) { //вызывается для элемента, на который "сбрасывают" перемещаемый элемент.
      e.preventDefault()                       //Событие отвечает за извлечение "сброшенных" данных и их вставку.
   }

   function dropCardHandler(e, board) {  //board доска НА которую бросается
      const data = {
         'boardFrom': currentBoard.id,
         'boardTo': board.id,
         'item': currentItem,
         'itemId': currentBoard.items.indexOf(currentItem)
      }
      dispath(movingItem(data))
      e.target.style.boxShadow = 'none'
   }

   useEffect(() => {
      setBoards(arrItem);
   }, [arrItem]);


   return (
      <div className='column room'>
         <h3 >Комнаты</h3>
         <div className='room__inner'>
            {boards.map(board =>
               <div key={board.id} className='column column__board'
                  onDragOver={e => dragOverHandler(e)}
                  onDrop={e => dropCardHandler(e, board)}
               >
                  <h4>Room {board.id}</h4>
                  <div className='inner'>
                     {board.items.map(item =>
                        <div key={item.articul}
                           tabIndex="0"
                           className='item'
                           draggable={true}
                           onDragOver={e => dragOverHandler(e)}
                           onDragLeave={e => dragLeaveHandler(e)}
                           onDragStart={e => dragStartHandler(e, board, item)}
                           onDragEnd={e => dragEndHandler(e)}
                           onDrop={e => dropHandler(e)}
                        >
                           <p className='item__title'><i>Артикул:</i></p>
                           <p className='item__articul'>{item.articul}</p>
                           <img className='item__img' src={item.icon} alt={item.name} />
                        </div>
                     )}
                  </div>
               </div>
            )}
         </div>
      </div>
   )
}