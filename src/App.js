import './App.css';
import { useEffect, useState } from 'react';
import Content from './components/Content';

const App = () => {

  const [content, setContent] = useState('users');
  const [data, setData] = useState([])

  useEffect(() => {
      // Call some external API
      fetch(`https://6236325feb166c26eb300861.mockapi.io/hooks/useeffect/${content}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response;
      })
      .then(data => {
        setData(data)
      })
      .catch(error => {
        console.log(error);
      })
  },[content])


  const handleContentChange = (content) => {
    setContent(content);
  }

  

  return (
    <div className="App">
      <p>Showing: {content}</p>
      <button onClick={() => handleContentChange('users') }>Users</button>
      <button onClick={() => handleContentChange('posts') }>Posts</button>
      <button onClick={() => handleContentChange('comments') }>Comments</button>

      <Content data={data}/>
    
    </div>
  );
}

export default App;
