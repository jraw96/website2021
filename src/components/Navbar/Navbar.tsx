import {Link} from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
    return (<div>
        <nav>
            <ul>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/books">Books</Link>
                </li>
                <li>
                    <Link to="/travel">travel</Link>
                </li>
            </ul>
        </nav>
    </div>);
}

export default Navbar;
