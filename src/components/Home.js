import React, { useEffect } from 'react'
import BlogList from '../BlogList';
import useFetch from './useFetch';
export default function Home() {
    // const [blogs, setBlogs] = useState(
    // //     [
    // //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    // //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    // //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // //   ]
    // null
    // );
    // const [isPending,setIsPending]=useState(true);
    // const [error,setError]=useState(null);
    // // const handleDelete=(id)=>{
    // //     //console.log(id);
    // //     setBlogs(blogs.filter((blog)=> blog.id!==id));
    // // }



    // useEffect(() => {
    //     setTimeout(() => {
    //       fetch('http://localhost:8000/Blogs') 
    //         .then(response => {
    //           if (!response.ok) {
    //             throw new Error("Failed to fetch data from server");
    //           }
    //           return response.json();
    //         })
    //         .then(data => {
    //           setBlogs(data);
    //           setIsPending(false);
    //           setError(null);
    //         })
    //         .catch(err => {
    //           setError(err.message);
    //           setIsPending(false);
    //         });
    //     }, 1000);
    //   }, []);


    const {data:blogs,isPending,error}=useFetch('http://localhost:8000/Blogs');


    return (
        <div className="home">
            {error && <div> {error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList bloglist={blogs} title="All Blogs"/* handleDelete={handleDelete}*/></BlogList>}
        </div>
    );
}