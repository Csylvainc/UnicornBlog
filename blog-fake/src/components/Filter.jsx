import React from 'react'


function Filter(props) {
 

    const toSearch = (e) => {
        props.parentCallback(e.target.search.value);
        e.preventDefault();
    }
  return (
    <div>
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