import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appReducer.js'
// import carouselReducer from '../features/displayCard/context/carouselCardSlice.js'

export const store = configureStore({
  reducer: {
    app: appReducer,
    // cardsData: carouselReducer
  }
})