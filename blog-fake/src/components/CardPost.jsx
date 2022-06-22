import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap'


function CardPost(props) {
  return (
    <Card className="m-3">
      
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.body.substring(0,30)}
        </Card.Text>
        <LinkContainer to={"/Onepost/" + props.id}>
        <Button variant="primary">Lire la suite</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}

export default CardPost;