import { createSlice } from "@reduxjs/toolkit";
import { arrItem } from '../store/items';


export const elemSlice = createSlice({
   name: 'item',
   initialState: {
      arrayItems: arrItem,
      removeError: 'Введите артикул',
      styleError: 'label-title',
   },
   reducers: {
      remove: (state, data) => {
         state.removeError = 'Введите корректный артикул';
         state.styleError = 'label-title error'
         let art = data.payload
         state.arrayItems.map(item => item.items.forEach((el, id) => {
            if (el['articul'] === art) {
               state.removeError = 'Успешно удален';
               state.styleError = 'label-title'
               item.items.splice(id, 1);
            }
         }));
      },
      plusItem: (state, data) => {
         let newitem = data.payload;
         state.arrayItems.map(item => item['id'] === newitem.room ? item['items'].push(newitem) : true)
      },
      movingItem: (state, data) => {
         let objData = data.payload;  // {boardFrom: 2, boardTo: 3, item: {...}, itemId: 1}
         state.arrayItems.map(item => item['id'] === objData['boardTo'] ? item['items'].push(objData['item']) : objData)
         state.arrayItems.map(item => item['id'] === objData['boardFrom'] ? item['items'].splice(objData['itemId'], 1) : objData)
      },
   }
});

export const { remove, plusItem, movingItem } = elemSlice.actions;
export const selectItems = state => state.item.arrayItems;
export const selectRemoveError = state => state.item.removeError;
export const selectstyleError = state => state.item.styleError;
export default elemSlice.reducer;