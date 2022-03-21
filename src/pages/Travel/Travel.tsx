import "./Travel.scss";
import vietnamThumbnail from "../../images/thumbnails/vietnam.jpg";
import franceThumbnail from "../../images/thumbnails/france.jpg";
import austinThumbnail from "../../images/thumbnails/austin.jpeg";
import westTexasThumbnail from "../../images/thumbnails/west texas.jpg";
import miamiThumbnail from "../../images/thumbnails/miami.jpg";
import torontoThumbnail from "../../images/thumbnails/toronto.jpg";

import France from '../../components/Albums/France/France';
import Vietnam from '../../components/Albums/Vietnam/Vietnam';
//import Miami from '../../components/Albums/Miami/Miami';
//import Austin from '../../components/Albums/Austin/Austin'




import { useState } from "react";

function Travel() {

	const [album, setAlbum] = useState("")

	return (
		<div>
		<div className='travel-container'>
			<div className='row'>
				<h1 className='header'>2021</h1>
				<div className="tiles">
					<div className="tile" onClick={()=>setAlbum('austin')}>
						<img src={austinThumbnail} className="thumbnail-pic" alt="austin thumbnail" />
						<h2 className="thumbnail-subheader">Austin</h2>
					</div>
					<div className="tile" onClick={()=>setAlbum('westTexas')}>
						<img src={westTexasThumbnail} className="thumbnail-pic" alt="west texas thumbnail" />
						<h2 className="thumbnail-subheader">West Texas</h2>
					</div>
					<div className="tile">
						<img src={miamiThumbnail} onClick={()=>setAlbum('miami')} className="thumbnail-pic" alt="miami thumbnail" />
						<h2 className="thumbnail-subheader">Miami</h2>
					</div>
				</div>
			</div>
			<div className='row'>
				<h1 className='header'>2020</h1>
				<div className="tiles">
					<div className="tile">
						<img src={torontoThumbnail} onClick={()=>setAlbum('toronto')} className="thumbnail-pic" alt="vietnam thumbnail" />
						<h2 className="thumbnail-subheader">Toronto</h2>
					</div>
				</div>
			</div>
			<div className='row'>
				<h1 className='header'>2019</h1>
				<div className="tiles">
					<div className="tile">
						<img src={vietnamThumbnail} onClick={()=>setAlbum('vietnam')} className="thumbnail-pic" alt="vietnam thumbnail" />
						<h2 className="thumbnail-subheader">Vietnam</h2>
					</div>
					<div className="tile">
						<img src={franceThumbnail} onClick={()=>setAlbum('france')} className="thumbnail-pic" alt="france thumbnail" />
						<h2 className="thumbnail-subheader">France</h2>
					</div>
				</div>
			</div>
		</div>
		{album === 'france' && <France />}
		{album === 'vietnam' && <Vietnam />}
		</div>
	);
}

export default Travel;
