import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
            <Link  to="/">Home</Link>
            <Link to="/create" style={{color:"white",background:"#1a5dbc",borderRadius:'8px'
            }}>New Blog</Link>
        </div>
    </nav>
  )
}
