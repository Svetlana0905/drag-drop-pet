import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { remove } from '../store/elementsSlice';
import { selectRemoveError, selectstyleError } from '../store/elementsSlice';

import { RemoveItem } from '../Components/RemoveItem/RemoveItem';

export const RemoveListItem = () => {
   const dispath = useDispatch();
   const [articul, setArticul] = useState('')
   const textError = useSelector(selectRemoveError)
   const styleError = useSelector(selectstyleError)

   function getArticul(event) {
      setArticul(event.target.value)
   }

   function clickHandler(e) {
      e.preventDefault();
      dispath(remove(articul));
      setArticul('')
   }
   const data = {
      'clickhandler': clickHandler,
      'articul': articul,
      'getArticul': getArticul,
      'texterror': textError,
      'styleerror': styleError,
   }
   return (
      <RemoveItem data={data} />
   )
}