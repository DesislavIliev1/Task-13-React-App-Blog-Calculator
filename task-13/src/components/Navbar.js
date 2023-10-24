import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar(){
    return (
    
        <div class="nav">
            <nav>
                <ul class="na">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
                </ul>

            </nav>
        </div>
    );
}

export default Navbar;