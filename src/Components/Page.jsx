import React from 'react';
import { AddListItem } from '../Containers/AddListItem';
import { MovingItem } from '../Containers/MovingItem';
import { MovingMobile } from '../Containers/MovingMobile';
import { RemoveListItem } from '../Containers/RemoveListItem';
import { SearchItem } from '../Containers/SearchItem';

import { useMediaQuery } from '../Containers/Phone';
export const Page = () => {

   const isPhonablet = useMediaQuery('(max-width: 767px)');

   return (
      <>
         <AddListItem />
         <div className='container'>
            <div className='inner'>
               <RemoveListItem />
               <SearchItem />
            </div>
         </div>
         {isPhonablet ? <MovingMobile /> : <MovingItem />}
      </>
   )
}