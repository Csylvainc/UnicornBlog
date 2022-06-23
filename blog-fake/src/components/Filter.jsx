import React from 'react'
import { useState, useEffect } from "react";

function Filter(props) {
    const [search, setSearch] = useState("");

    const toSearch = (e) => {
        props.parentCallback(e.target.search.value);
        e.preventDefault();
    }
  return (
    <div>
    <h4>Filtrer les articles</h4>
    <form onSubmit = {toSearch}>
                <input type = "text"
                name = "search" placeholder = "Enter Name"/>
                <br></br><br></br>
                <input type = "submit" value = "filtrer"/>
                <br></br><br></br>
            </form>
    </div>
  )
}

export default Filter