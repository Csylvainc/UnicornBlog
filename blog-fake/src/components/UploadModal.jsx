import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import Formulaire from './Formulaire'
export default function UploadModal() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');
  const [ok, setOk] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  
  
  const changeTitle = (e) => {
    setTitle(e.currentTarget.value)
  }

  const changeArticle = (e) => {
    setArticle(e.currentTarget.value)
  }
  
  localStorage.setItem("title",title);
  localStorage.setItem('article', article)


  const myFetch = (e) => {
    e.preventDefault()
    setOk('ok')
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: article,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))

  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Upload Modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formulaire myFetch={myFetch} changeTitle={changeTitle} changeArticle={changeArticle}/>
          
        </Modal.Body>
        <Modal.Footer>
        
            {ok==='ok' && <p>Vous avez crée le poste : "{title}" <br/>{article}</p>}
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<UploadModal />);