import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./usefetch";

const BlogDetails = () => {

    const { id } = useParams()
    const {data: blog, pending, error} = useFetch('http://localhost:8000/blogs/' + id)
    const hitory = useHistory()
    const handelclick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: "DELETE"
        })
        .then(() => {
          hitory.push("/")
        })
    }

    return (
        <div className="blog-details">
            
            {pending && <div>loading...</div>}
            {error && <div>{ error }</div>}
           {blog && (
            <article>
                <h2>{ blog.title }</h2>
                <p>writen by { blog.author }</p>
                <div>{ blog.body }</div>
                <button onClick={handelclick}>delete</button>
            </article>
           )}
        </div>
    );
}
 
export default BlogDetails;