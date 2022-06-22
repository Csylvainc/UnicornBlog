import React from 'react'
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
function Comments(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
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


            {data &&
                data.map(({ id, name, email, body, postId }) => (postId === props.idUser ?
                    <Card className="m-3">

                        <Card.Body>
                            <Card.Title>Titre du commentaire <br />{name} {id}</Card.Title>
                            <Card.Text>
                                {email}<br />{body}
                            </Card.Text>

                        </Card.Body>
                    </Card> : null

                ))}





        </div>

    )
}

export default Comments