import React from 'react';
import CardPhoto from '../components/CardPhoto'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState, useEffect } from "react";

export default function Gallery() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
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
            <h1>Liste des Articles</h1>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
           
                <div className="d-flex flex-wrap justify-content-center">
                {data &&
                    data.map(({ id, title, thumbnailUrl }) => (
                        <CardPhoto key={id} title={title} id={id} url={thumbnailUrl}/>
                    ))}
                </div>
               


          


        </div>
    );
}