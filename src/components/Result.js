import "./Result.css"

function Result(props) {
    return (
        <>
            <div className={"resultContainer"}>
                <div className={"resultCard"}>
                    <h1>{props.title}</h1>
                </div>
            </div>
        </>
    )
}

export default Result;