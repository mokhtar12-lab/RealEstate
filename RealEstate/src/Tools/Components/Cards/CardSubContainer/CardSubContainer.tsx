import icon_direction from "../../../../assets/homePage//Icon-direction.png"
import "./CardSubContainerStyle.css"


interface IData {
    TitleLanding?: string,
    ParagraphLanding?: string,

    hidden?: string,

    iconBoxOne: string,
    paragraphBoxOne: string,

    iconBoxTwo: string,
    paragraphBoxTwo: string,

    iconBoxThree: string,
    paragraphBoxThree: string,

    iconBoxFour: string,
    paragraphBoxFour: string,

}


export default function CardSubContainer({
    hidden,

    TitleLanding,
    ParagraphLanding,
    iconBoxOne,
    paragraphBoxOne,

    iconBoxTwo,
    paragraphBoxTwo,

    iconBoxThree,
    paragraphBoxThree,

    iconBoxFour,
    paragraphBoxFour,
}:IData) {
    return (
        <>
            <div className={`landing-service ${hidden}`}>
                <div className="info-in-landing-service container m-auto">
                    <h1> {TitleLanding} </h1>
                    <p>
                        {ParagraphLanding}
                    </p>
                </div>
            </div>

            <div className="main-sub-container">
                <div className="childe-from-main-sub-container">
                    <div className="icon-direction-main-sub-container">
                        <img src={icon_direction} />
                    </div>

                    <div className="icon-main-sub-container">
                        <img src={iconBoxOne} />
                    </div>

                    <p>
                        {paragraphBoxOne}
                    </p>
                </div>

                <div className="childe-from-main-sub-container">
                    <div className="icon-direction-main-sub-container">
                        <img src={icon_direction} />
                    </div>

                    <div className="icon-main-sub-container">
                        <img src={iconBoxTwo} />
                    </div>
                    <p>
                        {paragraphBoxTwo}
                    </p>
                </div>

                <div className="childe-from-main-sub-container">
                    <div className="icon-direction-main-sub-container">
                        <img src={icon_direction} />
                    </div>

                    <div className="icon-main-sub-container">
                        <img src={iconBoxThree} />
                    </div>
                    <p>
                        {paragraphBoxThree}
                    </p>
                </div>

                <div className="childe-from-main-sub-container">
                    <div className="icon-direction-main-sub-container">
                        <img src={icon_direction} />
                    </div>

                    <div className="icon-main-sub-container">
                        <img src={iconBoxFour} />
                    </div>
                    <p>
                        {paragraphBoxFour}
                    </p>
                </div>
            </div>
        </>
    )
}
