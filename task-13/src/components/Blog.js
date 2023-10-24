import blogData from './blogData.json';
import { Link } from "react-router-dom";
import './Blog.css'

function Blog(){
    
    return (
        <div className='blog'>
            {blogData.map((blog) => (
                <div className='blog-container' key={blog.id}>
                    <Link to={`/blog/${blog.id}`} className='blog-title'>
                        {blog.title}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Blog;