// import the css, and state management from react
import './Search.css';
import {useState} from "react";


function Search() {
    // Initialize our state with variables we need to keep track of
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

    async function handleSearch() {
        console.log(filterTerms)

        fetch("http://localhost:4999", {
            method: "POST",
            body: JSON.stringify(filterTerms),
            headers: {

            }
        }).then(res => res.text())
            .then(d => setApiResult(d))
    }


    // render this HTML to the DOM
    return (
        <>
            <div className={"titleContainer"}>
                <h1 className={"title"}>CCD Search Engine</h1>
                <p className={"title"}>By: Luke Tarr, Stefon Miller, and Matthew McKee</p>
            </div>
            <div className={"searchContainer"}>
                <input onChange={e => handleFilterChange("complaint_what_happened", e.target.value)} className={"searchBar"}
                       type={"text"} placeholder={"Search the CCD..."}/>
            </div>
            <div className={"filterContainer"}>
                {isFiltered ?
                    <div className={"filters"}>
                        <label>State:<input className={"filterItem"} type={"text"}
                                            onChange={e => handleFilterChange("state", e.target.value)}/></label>
                        <label>Zip:<input className={"filterItem"} type={"number"}
                                          onChange={e => handleFilterChange("zip_code", e.target.value)}/></label>
                        <label>Date:<input className={"filterItem"} type={"date"}
                                           onChange={e => handleFilterChange("date_received", e.target.value)}/></label>
                        <label>Product:<input className={"filterItem"} type={"text"}
                                            onChange={e => handleFilterChange("product", e.target.value)}/></label>
                        <label>Company:<input className={"filterItem"} type={"text"}
                                            onChange={e => handleFilterChange("company", e.target.value)}/></label>
                    </div>
                    :
                    <></>
                }
            </div>
            <div className={"buttonContainer"}>
                <input id={"filterBtn"} className={"btn"} type={"button"} value={"Filter"}
                       onClick={e => setIsFilter(!isFiltered)}/>
                <input id={"searchBtn"} className={"btn"} type={"button"} value={"Search"}
                       onClick={handleSearch}/>
            </div>


        </>
    );
}

export default Search;
