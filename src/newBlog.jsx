import { useState } from "react";
import { useNavigate} from "react-router-dom";

const NewBlog = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')

    
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author};
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=> {
            console.log('new blog added')
            navigate('/')
        })

    }
   
   

    return ( 
        <div className="newblog">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="blogtitle">Blog title</label>
                <input 
                type="text" 
                required  
                value={title}
                onChange = {(e)=> setTitle(e.target.value)}
                />
                <label htmlFor="blogbody">Blog body</label>
                <textarea 
                value={body}
                onChange = {(e)=> setBody(e.target.value)}
                required ></textarea>
                <label htmlFor="author">Blog author</label>
                <select 
                value={author}
                required
                onChange = {(e)=> setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <button>Add blog</button>
            </form>

            <p>{author} {body} {title}</p>
        </div>
     );
}
 
export default NewBlog;