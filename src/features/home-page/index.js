import {Header} from "../header";
import {Carusel} from "./carousel";
import {OfferText} from "./offer-text";
import {AddPictures} from "./add-pictures";
import {BestSellers} from "./best-sellers";
import {DescribeText} from "./describe-text";
import {Advantages} from "./advantages";
import {Reviews} from "./reviews";

export const HomePage = () => {

    return (
        <>
            <Header/>
            <Carusel/>
            <OfferText/>
            <AddPictures/>
            <BestSellers/>
            <DescribeText/>
            <Advantages/>
            <Reviews/>
        </>
    )
}