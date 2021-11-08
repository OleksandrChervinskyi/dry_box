import {combineReducers, configureStore} from "@reduxjs/toolkit";
import headerSlice from "../features/header/headerSlice";
import offerTextSlice from '../features/home-page/offer-text/offer-textSlice'
import carouselSlice from '../features/home-page/carousel/carouselSlice'
import addPicturesSlice from '../features/home-page/add-pictures/add-picturesSlice'
import bestsellersSlice from '../features/home-page/best-sellers/best-sellerSlice'
import describeTextSlice from '../features/home-page/describe-text/describe-textSlice'


export const store = configureStore({
    reducer: {
        header: headerSlice,
        mainPage: combineReducers({
            carousel: carouselSlice,
            offerText: offerTextSlice,
            addPictures: addPicturesSlice,
            bestSellers: bestsellersSlice,
            describeText: describeTextSlice,
        })
    }
})