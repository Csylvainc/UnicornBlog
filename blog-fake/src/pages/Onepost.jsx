import React from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";

export default function App() {
    const { id } = useParams()
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/` + id)
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
        <div className="container">
            <h1>Liste des Articles</h1>
         
            <Card className="m-3">

                <Card.Body>
                    <Card.Title>Post numero {id}</Card.Title>
                    <Card.Text>
                        {data.body}
                    </Card.Text>

                </Card.Body>
            </Card>


        </div>
    );
}



