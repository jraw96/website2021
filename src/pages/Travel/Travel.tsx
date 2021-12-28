import "./Travel.scss";
import vietnam from "../../images/thumbnails/vietnam.jpg";
import france from "../../images/thumbnails/france.jpg";
import austin from "../../images/thumbnails/austin.jpeg";
import westTexas from "../../images/thumbnails/west texas.jpg";
import miami from "../../images/thumbnails/miami.jpg";
import toronto from "../../images/thumbnails/toronto.jpg";

function Travel() {
	return (
		<div className='travel-container'>
			<div className='row'>
				<h1 className='header'>2021</h1>
				<div className="tiles">
					<div className="tile">
						<img src={austin} className="thumbnail-pic" alt="austin thumbnail" />
						<h2 className="thumbnail-subheader">Austin</h2>
					</div>
					<div className="tile">
						<img src={westTexas} className="thumbnail-pic" alt="west texas thumbnail" />
						<h2 className="thumbnail-subheader">West Texas</h2>
					</div>
					<div className="tile">
						<img src={miami} className="thumbnail-pic" alt="miami thumbnail" />
						<h2 className="thumbnail-subheader">Miami</h2>
					</div>
				</div>
			</div>
			<div className='row'>
				<h1 className='header'>2020</h1>
				<div className="tiles">
					<div className="tile">
						<img src={toronto} className="thumbnail-pic" alt="vietnam thumbnail" />
						<h2 className="thumbnail-subheader">Toronto</h2>
					</div>
				</div>
			</div>
			<div className='row'>
				<h1 className='header'>2019</h1>
				<div className="tiles">
					<div className="tile">
						<img src={vietnam} className="vietnam-thumbnail" alt="vietnam thumbnail" />
						<h2 className="thumbnail-subheader">Vietnam</h2>
					</div>
					<div className="tile">
						<img src={france} className="france-thumbnail" alt="france thumbnail" />
						<h2 className="thumbnail-subheader">France</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Travel;
