import {  useNavigate, useParams } from "react-router-dom";
import useFetch from './useFEtch'

const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog, error, isPending} = useFetch( 'http://localhost:8000/blogs/' + id)
    const navigate = useNavigate()

    const handleDelete =() => {
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method: 'DELETE'
        }).then(()=>{
            navigate('/')
        })
    }
   
    return ( 
        <div className="blogsdetails">
            {
               isPending && <div>Loading ...</div>
            }
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;