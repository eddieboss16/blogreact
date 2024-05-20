import { Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const BlogDetails = () => {
    const {id} = userParams()
    const {data:blogs} = useFetch('http://localhost:4000/blogs/' +id);
    const history = useHistory();

    const handleDelete = (e)=>{
        e.preventDefault()

        axios.delete('https://localhost:4000/blogs/' +id)
        .then (res=> {
            alert("Blog deleted");
            history.push('/');
        })
    }
    return(
        <div className="details">
        { blogs && (
            <article>
                <h3>{ blogs.title }</h3>
                <p>Done by: { blogs.author }</p>
                <div>{ blogs.body }</div>
                <Button onClick ={ handleDelete } variant ="danger" className="mt-3" type ="submit">Delete Blog</Button>
            </article>
        )}
        </div>
    )
}
export default BlogDetails;