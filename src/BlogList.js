import React from 'react'
import { Link } from 'react-router-dom'


export default function BlogList({bloglist,title,/*handleDelete*/}) {
    // const bloglist=props.bloglist;
  return (

    <div className="Blog-List">
        <h2>{title}</h2>
       {bloglist.map(blog => (
            <div className="blog-preview" key={blog.id} >
            <Link to={`/blogs/${blog.id}`}>

              <h2>{ blog.title }</h2>
              <p>Written by { blog.author } </p>
              {/* <button onClick={()=>{{handleDelete(blog.id)}}}>Delete</button> */}
          </Link>


            </div>
          ))}
    </div>
  )
}
