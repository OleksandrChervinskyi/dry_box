import {combineReducers, configureStore} from "@reduxjs/toolkit";
import headerSlice from "../features/header/headerSlice";
import offerTextSlice from '../features/pages/home/offer-text/offer-textSlice';
import carouselSlice from '../features/pages/home/carousel/carouselSlice';
import addPicturesSlice from '../features/pages/home/add-pictures/add-picturesSlice';
import bestsellersSlice from '../features/pages/home/best-sellers/best-sellerSlice';
import describeTextSlice from '../features/pages/home/describe-text/describe-textSlice';
import advantagesSlice from "../features/pages/home/advantages/advantagesSlice";
import reviewsSlice from "../features/pages/home/reviews/reviewsSlice";
import popularBrandsSlice from '../features/pages/home/popular-brands/popular-brandsSlice';
import aboutPageSlice from '../features/pages/about/aboutSlice';
import registerPageSlice from '../features/pages/register/registerSlice';
import loginPageSlice from "../features/pages/login/loginSlice";
import allProductsPageSlice from '../features/pages/all-products/all-productsSlice';
import oneProductDetailsPageSlice from '../features/pages/one-product-details/one-product-detailsSlice';
import asideSlice from "../features/pages/checkout/aside/asideSlice";
import mainSlice from "../features/pages/checkout/main/mainSlice";

export const store = configureStore({
    reducer: {
        header: headerSlice,
        mainPage: combineReducers({
            carousel: carouselSlice,
            offerText: offerTextSlice,
            addPictures: addPicturesSlice,
            bestSellers: bestsellersSlice,
            describeText: describeTextSlice,
            popularBrands: popularBrandsSlice,
            advantages: advantagesSlice,
            reviews: reviewsSlice,
        }),
        aboutPage: aboutPageSlice,
        registerPage: registerPageSlice,
        loginPage: loginPageSlice,
        allProductsPage: allProductsPageSlice,
        oneProductDetailsPage: oneProductDetailsPageSlice,
        checkoutPage: combineReducers({
            aside: asideSlice,
            main: mainSlice,
        }),
    }
})