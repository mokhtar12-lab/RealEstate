

import "./CardPriceAdditionalStyle.css"



interface IData {
    title: string,
    bodyOneRowBoxOneTitle?: string,
    bodyOneRowBoxOnePrice?: string,
    bodyOneRowBoxOnePriceOffers?: string,
    bodyOneRowBoxOnePriceOffersHidden?: string

    bodyOneRowBoxLeftTitle?: string,
    bodyOneRowBoxLeftPrice?: string,
    bodyOneRowBoxLeftPriceOffers?: string,
    bodyOneRowBoxLeftPriceOffersHidden?: string

    bodyTowRowBoxOneTitle?: string,
    bodyTowRowBoxOnePrice?: string,
    bodyTowRowBoxOnePriceOffers?: string,

    bodyTowRowBoxLeftTitle?: string,
    bodyTowRowBoxLeftPrice?: string,
    bodyTowRowBoxLeftPriceOffers?: string,

    FooterRowBoxTitle?: string,
    FooterRowBoxPrice?: string,
    FooterRowBoxPriceOffers?: string,

    FooterTowRowBoxTitle?: string,
    FooterTowRowBoxPrice?: string,
    FooterTowRowBoxPriceOffers?: string,


    bodyOneHidden?: string,
    bodyTowHidden?: string,
    footerOneHidden?: string,
    footerTowHidden?: string
}
export default function CardPriceAdditional( {title, 
    bodyOneRowBoxOneTitle, 
    bodyOneRowBoxOnePrice, 
    bodyOneRowBoxOnePriceOffers,
    bodyOneRowBoxOnePriceOffersHidden,

    bodyOneRowBoxLeftTitle,
    bodyOneRowBoxLeftPrice,
    bodyOneRowBoxLeftPriceOffers,
    bodyOneRowBoxLeftPriceOffersHidden,

    bodyTowRowBoxOneTitle, 
    bodyTowRowBoxOnePrice, 
    bodyTowRowBoxOnePriceOffers,

    bodyTowRowBoxLeftTitle,
    bodyTowRowBoxLeftPrice,
    bodyTowRowBoxLeftPriceOffers,

    FooterRowBoxTitle,
    FooterRowBoxPrice,
    FooterRowBoxPriceOffers,

    FooterTowRowBoxTitle,
    FooterTowRowBoxPrice,
    FooterTowRowBoxPriceOffers,

    bodyOneHidden,
    bodyTowHidden,
    footerOneHidden,
    footerTowHidden

    }:IData ) {
    return (
        <div className="card-price-additional">

            <div className="header-card-price-additional">
                <div className="title">
                    <h1> {title} </h1>
                </div>

                <div className="button-card-price-additional">
                    <button className="btn-card-price-additional">Learn More</button>
                </div>
            </div>

            <div className={`body-card-price-additional ${bodyOneHidden}`}>
                <span className="line-x"></span>

                <div className="row">
                    <div className="box-col">
                        <p> {bodyOneRowBoxOneTitle} </p>
                        <div className="box-prices">
                            <div className="prices">
                                <h1>$ {bodyOneRowBoxOnePrice} </h1>
                            </div>

                            <div className={`price-details-offer ${bodyOneRowBoxOnePriceOffersHidden}`}>
                                <p> {bodyOneRowBoxOnePriceOffers} </p>
                            </div>
                        </div>
                    </div>
                    <span className="line-x"></span>
                    <div className="box-col-left">
                        <span className="line-y"></span>
                        <div className="info-box">
                            <p> {bodyOneRowBoxLeftTitle} </p>
                            <div className="box-prices">
                                <div className="prices">
                                    <h1>$ {bodyOneRowBoxLeftPrice} </h1>
                                </div>
                                <div className={`price-details-offer ${bodyOneRowBoxLeftPriceOffersHidden}`}>
                                    <p> {bodyOneRowBoxLeftPriceOffers} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className={`body-card-price-additional ${bodyTowHidden}`}>
                <span className="line-x"></span>

                <div className="row">
                    <div className="box-col">
                        <p> {bodyTowRowBoxOneTitle} </p>
                        <div className="box-prices">
                            <div className="prices">
                                <h1>$ {bodyTowRowBoxOnePrice} </h1>
                            </div>

                            <div className="price-details-offer">
                                <p> {bodyTowRowBoxOnePriceOffers} </p>
                            </div>
                        </div>
                    </div>
                    <span className="line-x"></span>
                    <div className="box-col-left">
                        <span className="line-y"></span>
                        <div className="info-box">
                            <p> {bodyTowRowBoxLeftTitle} </p>
                            <div className="box-prices">
                                <div className="prices">
                                    <h1>$ {bodyTowRowBoxLeftPrice}</h1>
                                </div>
                                <div className="price-details-offer">
                                    <p> {bodyTowRowBoxLeftPriceOffers} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className={`footer-card-price-additional ${footerOneHidden}`}>
                <span className="line-x"></span>
                <div className="box-col">
                        <p> {FooterRowBoxTitle} </p>
                        <div className="box-prices">
                            <div className="prices">
                                <h1> {FooterRowBoxPrice} </h1>
                            </div>

                            <div className="price-details-offer">
                                <p> {FooterRowBoxPriceOffers} </p>
                            </div>
                        </div>
                </div>
            </div>

            <div className={`footer-card-price-additional ${footerTowHidden}`}>
                <span className="line-x"></span>
                <div className="box-col">
                        <p> {FooterTowRowBoxTitle} </p>
                        <div className="box-prices">
                            <div className="prices">
                                <h1> {FooterTowRowBoxPrice} </h1>
                            </div>

                            <div className="price-details-offer">
                                <p> {FooterTowRowBoxPriceOffers} </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
