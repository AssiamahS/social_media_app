import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/posts', { content, author: 'User' })
      .then(response => setPosts([...posts, response.data]))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Social Media App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
      <ul>
        {posts.map(post => (
          <li key={post._id}>{post.content} by {post.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
