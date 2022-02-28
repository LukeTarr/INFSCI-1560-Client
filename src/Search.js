import './Search.css';
import {useState} from "react";

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [apiResult, setApiResult] = useState({});

    return (
      <>
          <div className={"searchContainer"}>
              <input onChange={e => setSearchTerm(e.target.value)} className={"searchBar"}
                     type={"text"} placeholder={"Search the CCD..."}/>
          </div>
          <div className={"buttonContainer"}>
              <input id={"filterBtn"} className={"btn"} type={"button"} value={"Filter"}/>
              <input id={"searchBtn"} className={"btn"} type={"button"} value={"Search"}/>
          </div>
      </>
  );
}

export default Search;
