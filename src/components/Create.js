import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const blog={title,body,author};
    console.log(blog);
    
    fetch('http://localhost:8000/Blogs',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(blog)
    }).then(()=>{alert("blog has been added");
      navigate('/');
    })
  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input 
          type="text" 
          required 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
       
        <button>Add Blog</button>
      </form>
    </div>
  )
}
