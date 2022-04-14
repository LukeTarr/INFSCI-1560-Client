// import the css, and state management from react
import './Search.css';
import {useState} from "react";
import Result from "./Result";
import Button from 'react-bootstrap/Button';

function Search() {
    // Initialize our state with variables we need to keep track of
    const [apiResult, setApiResult] = useState({hits: {hits: [{_source: {}}]}});
    const [hasSearched, setHasSearched] = useState(false);
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


        if(Object.keys(filterTerms).length < 1){
            alert("Add at least 1 query parameter.")
        } else {

            fetch("http://localhost:4999", {
                method: "POST",
                body: JSON.stringify(filterTerms),
                headers: {}
            }).then(res => res.json())
                .then(d => {
                        if (d.error) {
                            alert(d.error)
                        } else {
                            setApiResult(d)
                            setHasSearched(true)
                        }
                    }
                )
        }
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
                        <label>ID:<input className={"filterItem"} type={"text"}
                                            onChange={e => handleFilterChange("complaint_id", e.target.value)}/></label>
                    </div>
                    :
                    <></>
                }
            </div>
            <div className={"buttonContainer"}>
                <Button id={"filterBtn"} type={"button"} className={"test"}
                       onClick={e => setIsFilter(!isFiltered)}>Filter</Button>
                <Button id={"searchBtn"} type={"button"} className={"test"}
                       onClick={handleSearch}>Search</Button>
            </div>
            {
                
                apiResult.hits.hits.length > 0 && hasSearched ?
                    apiResult.hits.hits.map((h, i) => {
                        
                        return <Result source={h._source}/>
                    })
                    :
                    <></>
            }

        </>

    );
}

export default Search;
