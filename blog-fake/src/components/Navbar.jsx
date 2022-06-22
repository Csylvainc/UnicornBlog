import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from '../pages/Home'
import Gallery from '../pages/Gallery'
import Upload from '../pages/Upload'


function MyNavbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/home">MyBlog</Navbar.Brand>
          <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link to="/Home">Home</Nav.Link>
            </LinkContainer> 
            <LinkContainer to="/Gallery"> 
            <Nav.Link>Gallery</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Upload">
            <Nav.Link>Upload</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Gallery" element={<Gallery />} />
    <Route path="/Upload" element={<Upload />} />
    {/* <Route path="/:id" element={<Post />} /> */}
  </Routes>
  </div>
  );
}

export default MyNavbar;