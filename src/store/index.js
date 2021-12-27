import { configureStore } from '@reduxjs/toolkit';
import elemSlice from './elementsSlice';

export default configureStore({
   reducer: {
      item: elemSlice,
   }
})