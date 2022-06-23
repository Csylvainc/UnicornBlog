import React from 'react'
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
function Comments(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments`)
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
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <div className="d-flex flex-wrap justify-content-center">
                {data &&
                    data.map(({ id, name, email, body, postId }) => (postId === props.idUser ?
                        <Card className="m-3" style={{ width: '14rem' }} key={id}>
                            <Card.Body>
                                <Card.Title>Nom :{name} <br /> {id}</Card.Title>
                                <Card.Text>
                                    Email : {email}<br />{body}
                                </Card.Text>
                            </Card.Body>
                        </Card> : null
                    ))}
            </div>
       </div>

    )
}

export default Comments