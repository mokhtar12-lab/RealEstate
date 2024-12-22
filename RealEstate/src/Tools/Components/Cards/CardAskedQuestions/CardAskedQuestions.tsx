import "./cardAskedQuestions.css"


interface IDataQuestion {
    question: string,
    answer: string
}

export default function CardAskedQuestions( {question, answer}:IDataQuestion ) {
    return (
        <div className="CardAskedQuestions">
            <div className="Questions">
                <h1>
                    {question}
                </h1>
            </div>

            <div className="anser">
                <p>
                    {answer}                
                </p>
            </div>

            <div className="button-read-more">
                <button className="btn-read-more">Read More</button>
            </div>
        </div>
    )
}
