import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('yoshi')
    const [pending, setPending] = useState(false)
    const hitory = useHistory()
    const handelsubmit = (e) => {
       e.preventDefault()
       const blog = {title, body, author}
       setPending(true)

       fetch('http://localhost:8000/blogs', {
        method: "post",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(blog)
       })
       .then(() => {
        console.log("new blog added")
        setPending(false)
        hitory.push("/")
        
       })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handelsubmit}>
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
                <select
                 value={author}
                 onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!pending && <button>Add Blog</button>}
                {pending && <button disabled>Adding Blog...</button>}
            </form>
            
        </div>
    );
}
 
export default Create;