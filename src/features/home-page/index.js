import {Header} from "../header";
import {Carusel} from "./carousel";
import {OfferText} from "./offer-text";
import {AddPictures} from "./add-pictures";

export const HomePage = () => {

    return (
        <>
            <Header/>
            <Carusel/>
            <OfferText/>
            <AddPictures/>
        </>
    )
}