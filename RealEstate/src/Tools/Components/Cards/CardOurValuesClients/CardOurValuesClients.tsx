
import "./cardOurValuesClients.css"



interface IData {
    date : string,
    typeRealEstate: string,
    category: string,
    commentOfClient: string
}

export default function CardOurValuesClients( {date, typeRealEstate, category, commentOfClient}:IData ) {
    return (
        <div className="cardOurValuesClients">
            
            <div className="header-card">

                <div className="info">
                    <p>
                        Since {date}
                    </p>
                    <h1>
                        {typeRealEstate}
                    </h1>
                </div>
                <div className="button-card">
                    <button className="btn">Visit WebSite</button>
                </div>

            </div>

            <div className="body-card">
                <div className="box">
                    <p>Domain</p>
                    <h1>Commercial Real Estate</h1>
                </div>

                <div className="line-y"></div>

                <div className="box">
                    <p>Category</p>
                    <h1> {category} </h1>
                </div>
            </div>

            <div className="footer-card">
                <p>What They Said</p>
                <h1>
                    {commentOfClient}
                </h1>
            </div>
        </div>
    )
}
