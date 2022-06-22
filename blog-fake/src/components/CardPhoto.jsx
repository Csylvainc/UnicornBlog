import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap'
import {
  Routes,
  Route,
} from "react-router-dom";

function CardPhoto(props) {
    return (
        <Card style={{ width: '18rem' }} className="m-3">
          <Card.Img variant="top" src={props.url} style={{ width: '18rem' }}/>
          <Card.Body>
            <Card.Title>{props.id}</Card.Title>
            <Card.Text>
              {props.title}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }

export default CardPhoto;