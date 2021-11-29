import "./About.scss";
import pic from "../../images/mountain_profile.jpeg";

function About() {
	return (
		<div className='about-container'>
			<div className='row'>
				<div className='img-container'>
					<img
						className='image'
						src={pic}
						alt='jake in mountain'
						width='463px'
					/>
				</div>
				<div className='description'>
					<h1 className='header'>Hi, I'm Jake.</h1>
					<p className='text'>
						I'm a front end software engineer based in Austin, Texas.
					</p>
					<p className='text'>
						In my spare time I enjoy reading, running, eating spicy foods and
						listening to math rock.
					</p>
					<p className='text'>
						Also on this website are sections about book's I've read and places I've visited, updated annually. 
						Stay tuned!
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
