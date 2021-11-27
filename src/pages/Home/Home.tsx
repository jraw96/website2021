import "./Home.scss";

import Navbar from "../../components/Navbar/Navbar";

function Home() {
	return (
		<div className='container'>
			<Navbar />
			<div className='footer'>
				<div className='details'>
					<div className='detail'>
						<span className='text bold'>Jake Raw</span>
					</div>
					<div className='detail'>
						<span className='text'>jtraw96@gmail.com</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
