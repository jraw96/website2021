import "./Home.scss";
function Home() {
	return (
		<div className='home-container'>
			<div></div>
			<div className='footer'>
				<div className='icon-row'>
					<i className='fab fa-instagram icon'></i>
					<i className='fab fa-linkedin-in icon'></i>
				</div>
				<div className='details'>
					<div className='detail'>
						<span className='text bold'>Jake Raw</span>
					</div>
					<div className='detail'>
						<span className='text'>(512) 586-6368</span>
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
