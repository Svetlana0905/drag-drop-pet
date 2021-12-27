import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import lamp from '../img/png/lamp.png';
import closet from '../img/png/closet.png';
import chair from '../img/png/chair.png';
import table from '../img/png/workplace.png';

import { AddItem } from '../Components/AddItem/AddItem';
import { plusItem } from '../store/elementsSlice';


export const AddListItem = () => {
   const dispath = useDispatch();

   const [articul, setArticul] = useState('')
   const [name, setName] = useState('')
   const [color, setColor] = useState('')
   const [room, setRoom] = useState('')
   const [iconPath, setIconPath] = useState('')

   function getArticul(event) {
      setArticul(event.target.value)
   }
   function getName(event) {
      setName(event.target.value);
      getIcon(event.target.value)
   }
   function getColor(event) {
      setColor(event.target.value)
   }
   function getRoom(event) {
      setRoom(+event.target.value)

   }
   function getIcon(name) {
      if (name === 'стол') setIconPath(table)
      if (name === 'стул') setIconPath(chair)
      if (name === 'лампа') setIconPath(lamp)
      if (name === 'шкаф') setIconPath(closet)
   }
   const newItem = {
      'articul': articul,
      'name': name,
      'color': color,
      'room': room,
      'icon': iconPath,
   }
   function clickHandler(e) {
      e.preventDefault();
      dispath(plusItem(newItem))

   }
   const data = {
      clickhandler: clickHandler,
      getarticul: getArticul,
      itarticul: articul,
      getname: getName,
      name: name,
      getcolor: getColor,
      color: color,
      getroom: getRoom,
      room: room,
   }

   return (
      <AddItem data={data} />
   )
}