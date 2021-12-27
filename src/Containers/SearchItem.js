import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Search } from '../Components/Search/Search';
import { selectItems } from '../store/elementsSlice';


export const SearchItem = () => {
   const arrItem = useSelector(selectItems)
   const [articul, setArticul] = useState('')
   const [textSearch, setTextSearch] = useState('Введите артикул')
   const [styleSearch, setStyleSearch] = useState('hidden')
   const [styleError, setStyleError] = useState('label-title')
   const [resultSearch, setResultSearch] = useState({})

   function closeSerch() {
      setStyleSearch('hidden')
      console.log(styleSearch)
   }

   function getArticul(event) {
      setArticul(event.target.value)
   }

   function clickHandler(e) {
      e.preventDefault();
      setTextSearch('Введите корректный артикул');
      setStyleError('label-title error');
      setStyleSearch('hidden')
      arrItem.map((item, id) => item.items.forEach(el => {
         if (el['articul'] === articul) {
            setResultSearch({
               'Name': el['name'],
               'Articul': el['articul'],
               'Room': id + 1,
            })
            setStyleSearch('popup-block active-serch')
            setTextSearch('Введите новый артикул');
            setStyleError('label-title');
         }
      }));
      setArticul('')
   }

   const data = {
      'clickhandler': clickHandler,
      'articul': articul,
      'getArticul': getArticul,
      'textsearch': textSearch,
      'resultsearch': resultSearch,
      'stylesearch': styleSearch,
      'closeserch': closeSerch,
      'styleerror': styleError,
   }

   return (
      <Search data={data} />
   )
}