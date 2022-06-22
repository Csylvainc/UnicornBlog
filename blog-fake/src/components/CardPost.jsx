import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardPost() {
  return (
    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Lire la suite</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPost;