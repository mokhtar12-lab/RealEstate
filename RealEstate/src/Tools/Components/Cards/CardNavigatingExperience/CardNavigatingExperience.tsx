import "./cardNavigatingExperience.css"



interface IData {
    step: string,
    title: string,
    description: string
}

export default function CardNavigatingExperience( {step, title, description}:IData ) {
    return (
        <div className="CardNavigatingExperience">

            <div className="title-card">
                <div className="border-left"></div>
                <div className="border-bottom"></div>
                <p>Step 0{step}</p>
            </div>

            <div className="body-card">
                <div className="border-left"></div>

                <div className="title-body-card">
                    <h1>{title}</h1>
                </div>

                <div className="description-bode-card">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
