
import CardPriceAdditional from "../Cards/CardPriceAdditional/CardPriceAdditional"
import CommonDesign from "../commonDesign/CommonDesign"
import LoopingQusetion from "../LoopsData/LoopingHome/LoopingQusetion"
import "./pricingStyle.css"
export default function  PricingDetails() {
    return (
        <div className="price-details"> 
            <div className="note">
                <h1>Note</h1>
                <span className="line-y"></span>
                <span className="line-x"></span>
                <p>
                    The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.
                </p>
            </div>

            <div className="details">

                <div className="listing-price">
                    <p>Listing Price</p>
                    <h1> $1,250,000 </h1>
                </div>

                <div className="price-additional">
                    <CardPriceAdditional 
                        title="Additional Fees"

                        footerTowHidden="hidden"

                        bodyOneRowBoxOneTitle="Property Transfer Tax"
                        bodyOneRowBoxOnePrice="25,000"
                        bodyOneRowBoxOnePriceOffers="Based on the sale price and local regulations"

                        bodyOneRowBoxLeftTitle="Legal Fees"
                        bodyOneRowBoxLeftPrice="3,000"
                        bodyOneRowBoxLeftPriceOffers="Approximate cost for legal services, including title transfer"

                        bodyTowRowBoxOneTitle="Home Inspection"
                        bodyTowRowBoxOnePrice="500"
                        bodyTowRowBoxOnePriceOffers="Recommended"

                        bodyTowRowBoxLeftTitle="Property Insurance"
                        bodyTowRowBoxLeftPrice="1,200"
                        bodyTowRowBoxLeftPriceOffers="Annual cost for comprehensive property insurance"

                        FooterRowBoxTitle="Mortgage Fees"
                        FooterRowBoxPrice="Varies"
                        FooterRowBoxPriceOffers="If applicable, consult with your lender for specific details"
                    />

                    <CardPriceAdditional 
                        title="Monthly Costs"

                        bodyOneHidden="hidden"
                        bodyTowHidden="hidden"

                        FooterRowBoxTitle="Property Taxes"
                        FooterRowBoxPrice="1,250"
                        FooterRowBoxPriceOffers="Approximate monthly property tax based on the sale price and local rates"

                        FooterTowRowBoxTitle="Homeowners' Association Fee"
                        FooterTowRowBoxPrice="300"
                        FooterTowRowBoxPriceOffers="Monthly fee for common area maintenance and security"
                    /> 

                    <CardPriceAdditional 
                        title="Total Initial Costs"

                        footerTowHidden="hidden"
                        footerOneHidden="hidden"
                        bodyOneRowBoxOnePriceOffersHidden="hidden"

                        bodyOneRowBoxOneTitle="Listing Price"
                        bodyOneRowBoxOnePrice="1,250,000"

                        bodyOneRowBoxLeftTitle="Additional Fees"
                        bodyOneRowBoxLeftPrice="29,700"
                        bodyOneRowBoxLeftPriceOffers="Property transfer tax, legal fees, inspection, insurance"

                        bodyTowRowBoxOneTitle="Down Payment"
                        bodyTowRowBoxOnePrice="250,000"
                        bodyTowRowBoxOnePriceOffers="20%"

                        bodyTowRowBoxLeftTitle="Mortgage Amount"
                        bodyTowRowBoxLeftPrice="1,000,000"
                        bodyTowRowBoxLeftPriceOffers="If applicable"
                    /> 

                    <CardPriceAdditional 
                        title="Monthly Expenses"

                        footerTowHidden="hidden"
                        footerOneHidden="hidden"
                        bodyOneRowBoxOnePriceOffersHidden="hidden"

                        bodyOneRowBoxLeftPriceOffersHidden="hidden"

                        bodyOneRowBoxOneTitle="Property Taxes"
                        bodyOneRowBoxOnePrice="1,250"

                        bodyOneRowBoxLeftTitle="Homeowners' Association Fee"
                        bodyOneRowBoxLeftPrice="$300"

                        bodyTowRowBoxOneTitle="Mortgage Payment"
                        bodyTowRowBoxOnePrice="Varies based on terms and interest rate"
                        bodyTowRowBoxOnePriceOffers="If applicable"

                        bodyTowRowBoxLeftTitle="Property Insurance"
                        bodyTowRowBoxLeftPrice="100"
                        bodyTowRowBoxLeftPriceOffers="Approximate monthly cost"
                    /> 

                </div>

            </div>

            <div>
                <CommonDesign
                    title="Frequently Asked Questions"
                    desc="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
                    nameBTN="View All FAQ’s"
                    card={<LoopingQusetion nameBTN="View All FAQ’s"/>}
                />
            </div>
        </div>
    )
}
