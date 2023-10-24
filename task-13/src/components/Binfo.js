import blogData from './blogData.json';
import { useParams } from 'react-router-dom';

function Binfo(){
    const {id} = useParams();
    const blog = blogData.find((blog) => blog.id == id);

    if (!blog) {
        return <div>Blog article not found</div>;
    }

    return (
        <div className='blog'>
            <div className='blog-container'>
                <div className='blog-article-title'>{blog.title}</div>
                <div className='blog-article-content'>{blog.content}</div>
                <div className='blog-article-author'>{blog.author}</div>
                <div className='blog-article-date'>{blog.date}</div>
            </div>
        </div>
    );
}

export default Binfo;
