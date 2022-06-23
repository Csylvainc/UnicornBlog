import React from 'react';
import CardPost from '../components/CardPost'
import Filter from '../components/Filter'
import {newArticle} from './Upload'
import { useState, useEffect } from "react";

export default function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    const handleCallback = (childData) => {
        setSearch(childData)
    }
    

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div>
        <h1 className="m-5">Liste des Articles</h1>
        <div className="container-fluid d-flex">
            

            <Filter parentCallback={handleCallback}/>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
                {localStorage.getItem('title')!== '' && 
                    <div><h1>Nouveau post</h1><br />{localStorage.getItem('title')}<br />{localStorage.getItem('article')}</div>
                }
                <div className="d-flex flex-wrap justify-content-center">
                {data &&
                    data.map(({ id, title, body }) => ( title.indexOf(search) !== -1 ?
                        <CardPost title={title} key={id} body={body} id={id}/>:null
                    ))}
                </div>
                </div>
        </div>
    );
}