
import BlogList from "./Bloglist";
import useFetch from "./usefetch";
const Home = () => {

    const {data: blogs, pending, error} = useFetch('http://localhost:8000/blogs')
    
    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {pending && <div>loading...</div>}
           {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            
        </div>
    );
}
 
export default Home;