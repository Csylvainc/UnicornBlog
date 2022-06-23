import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Formulaire(props) {
  return (
    <Form className="w-50" onSubmit={props.myFetch}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Saisir un titre d'article" onChange={props.changeTitle} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">

          <FloatingLabel controlId="floatingTextarea2" label="Votre Article">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
              onChange={props.changeArticle}
            />
          </FloatingLabel>
        </Form.Group>
        <Button variant="success" type="submit">
          Envoyer
        </Button>
      </Form>
  )
}

export default Formulaire

