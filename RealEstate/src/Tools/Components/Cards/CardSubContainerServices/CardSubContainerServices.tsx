import groupImage from "../../../../assets/servicePage/Group.png"


import "./CardSubContainerServicesStyle.css"


interface IData {
    imgCardOne: string,
    titCardOne: string,
    descCardOne: string,

    imgCardTwo: string,
    titCardTwo: string,
    descCardTwo: string,

    imgCardThree: string,
    titCardThree: string,
    descCardThree: string,

    imgCardFour: string,
    titCardFour: string,
    descCardFour: string,

    titCardFive: string,
    descCardFive: string,
}


export default function CardSubContainerServices( {
    imgCardOne,
    titCardOne,
    descCardOne,

    imgCardTwo,
    titCardTwo,
    descCardTwo,

    imgCardThree,
    titCardThree,
    descCardThree,

    imgCardFour,
    titCardFour,
    descCardFour,

    titCardFive,
    descCardFive,
}:IData ) {
    return (
        <div className="CardSubContainerServices">
            <div className="row-one">
                <div className="col-in-row">
                    <div className="header-card">
                        <div className="img-header-card">
                            <img src={imgCardOne} />
                        </div>
                        <h1> {titCardOne} </h1>
                    </div>

                    <div className="info-card">
                        <p>
                            {descCardOne}
                        </p>
                    </div>
                </div>

                <div className="col-in-row">
                    <div className="header-card">
                        <div className="img-header-card">
                            <img src={imgCardTwo} />
                        </div>
                        <h1> {titCardTwo} </h1>
                    </div>

                    <div className="info-card">
                        <p>
                            {descCardTwo}
                        </p>
                    </div>
                </div>

                <div className="col-in-row">
                    <div className="header-card">
                        <div className="img-header-card">
                            <img src={imgCardThree} />
                        </div>
                        <h1> {titCardThree} </h1>
                    </div>

                    <div className="info-card">
                        <p>
                            {descCardThree}
                        </p>
                    </div>
                </div>

            </div>

            <div className="row-two">
                <div className="col-in-row">
                    <div className="header-card">
                        <div className="img-header-card">
                            <img src={imgCardFour} />
                        </div>
                        <h1> {titCardFour} </h1>
                    </div>

                    <div className="info-card">
                        <p>
                            {descCardFour}
                        </p>
                    </div>
                </div>

                <div className="col-in-row-two">
                    <img src={groupImage} />
                    <div className="some-info">
                        <div className="descriptions-some-info">
                            <h1> {titCardFive} </h1>
                            <div className="button-some-info">
                                <button className="btn-some-info">Learn More</button>
                            </div>
                        </div>
                        <p>
                            {descCardFive}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
