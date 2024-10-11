import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>sorry</h2>
            <p>the page is not found</p>
            <Link to="/" className="a">Back to home page...........</Link>
        </div>
    );
}
 
export default NotFound;