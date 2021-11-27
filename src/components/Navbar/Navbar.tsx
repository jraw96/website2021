import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
	return (
		<div>
			<nav>
				<ul className='row'>
					<div className='home'>
						<li>
							<Link to='/'>home</Link>
						</li>
					</div>
					<div className='sections'>
						<li className='section'>
							<Link to='/about'>about</Link>
						</li>
						<li className='section'>
							<Link to='/travel'>travel</Link>
						</li>
						<li className='section'>
							<Link to='/books'>books</Link>
						</li>
					</div>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
