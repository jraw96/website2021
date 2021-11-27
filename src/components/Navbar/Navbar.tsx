import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";

function Navbar() {
	const [value, setValue] = useState(0);
	return (
		<nav
			className={`${
				window.location.pathname !== "/" ? "background-color" : ""
			}`}
		>
			<ul className='row'>
				<div className='home'>
					<li>
						<Link
							onClick={() => {
								setValue(value + 1);
							}}
							to='/'
						>
							home
						</Link>
					</li>
				</div>
				<div className='sections'>
					<li className='section'>
						<Link
							onClick={() => {
								setValue(value + 1);
							}}
							to='/about'
						>
							about
						</Link>
					</li>
					<li className='section'>
						<Link
							onClick={() => {
								setValue(value + 1);
							}}
							to='/travel'
						>
							travel
						</Link>
					</li>
					<li className='section'>
						<Link
							onClick={() => {
								setValue(value + 1);
							}}
							to='/books'
						>
							books
						</Link>
					</li>
				</div>
			</ul>
		</nav>
	);
}

export default Navbar;
