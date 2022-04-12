import "./Result.css"

function Result(props) {
    console.log(props);
    return (
        <>
            <div className={"resultContainer"}>
                <div className={"resultCard"}>
                    <div className={"topRow"}>
                        <span><b>{props.title}</b></span>
                        <span><b>{props.body.company}</b></span>
                        <span><b>{props.body.date}</b></span>
                    </div>
                    <p style={{overflow:"hidden"}}>{props.body.issue}</p> 
                    <p></p>
                </div>
            </div>
        </>
    )
}

export default Result;