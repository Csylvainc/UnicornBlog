import { useState } from "react";
import Formulaire from '../components/Formulaire'
function Upload() {
  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');
  const [ok, setOk] = useState('');

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
    <div className="m-3 p-5">
      <Formulaire myFetch={myFetch} changeTitle={changeTitle} changeArticle={changeArticle}/>
      <div className="d-flex flex-column">
       {ok==='ok' && <div>Vous avez crée le poste : "{title}" <br/>{article}</div>}
      </div>  
    </div>
  );
}

export default Upload;