import { configureStore } from '@reduxjs/toolkit';
import Counter from './Counter';

const store = configureStore({
      reducer:{CountData:Counter}
})
export default store;