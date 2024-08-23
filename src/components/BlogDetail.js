import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';


export default function BlogDetail() {
const navigate=useNavigate();

    const { id } = useParams()
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/Blogs/'+id);
    const handleClick=(()=>{
        fetch('http://localhost:8000/Blogs/'+blog.id,{
            method:'DELETE'
        }).then(()=>{
            navigate('/')
        })
    })
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    )
}
