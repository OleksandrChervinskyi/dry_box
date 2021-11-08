import {combineReducers, configureStore} from "@reduxjs/toolkit";
import headerSlice from "../features/header/headerSlice";
import offerTextSlice from '../features/home-page/offer-text/offer-textSlice'
import carouselSlice from '../features/home-page/carousel/carouselSlice'
import addPicturesSlice from '../features/home-page/add-pictures/add-picturesSlice'


export const store = configureStore({
    reducer: {
        header: headerSlice,
        mainPage: combineReducers({
            carousel: carouselSlice,
            offerText: offerTextSlice,
            addPictures: addPicturesSlice,
        })
    }
})