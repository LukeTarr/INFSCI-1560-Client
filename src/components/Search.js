// import the css, and state management from react
import './Search.css';
import {useState} from "react";

function Search() {
    // Initialize our state with variables we need to keep track of
    const [searchTerm, setSearchTerm] = useState("");
    const [apiResult, setApiResult] = useState({});
    const [isFiltered, setIsFilter] = useState(false);
    const [filterTerms, setFilterTerms] = useState({});

    // this will check the new input, if it's empty, delete the key, if it's valid, update the value at that key
    function handleFilterChange(field, input) {
        let tempList = filterTerms;
        if (input === "") {
            delete tempList[field];
        } else {
            tempList[field] = input;
        }
        setFilterTerms(tempList);
    }


    // redner this HTML to the DOM
    return (
        <>
            <div className={"searchContainer"}>
                <input onChange={e => setSearchTerm(e.target.value)} className={"searchBar"}
                       type={"text"} placeholder={"Search the CCD..."}/>
            </div>
            <div className={"filterContainer"}>
                {isFiltered ?
                    <div className={"filters"}>
                        <label>State:<input className={"filterItem"} type={"text"}
                                            onChange={e => handleFilterChange("State", e.target.value)}/></label>
                        <label>Zip:<input className={"filterItem"} type={"number"}
                                          onChange={e => handleFilterChange("Zip", e.target.value)}/></label>
                        <label>Date:<input className={"filterItem"} type={"text"}
                                           onChange={e => handleFilterChange("Date", e.target.value)}/></label>
                    </div>
                    :
                    <></>
                }
            </div>
            <div className={"buttonContainer"}>
                <input id={"filterBtn"} className={"btn"} type={"button"} value={"Filter"}
                       onClick={e => setIsFilter(!isFiltered)}/>
                <input id={"searchBtn"} className={"btn"} type={"button"} value={"Search"}
                       onClick={e => console.log(filterTerms)}/>
            </div>
        </>

    );
}

export default Search;
