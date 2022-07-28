import iceCream from '../../assets/images/iceCream.jpg';
import food from '../../assets/images/food.jpg';
import sweets from '../../assets/images/sweets.jpg';

import './news.scss';

const New = () => {
	return(
		<>
			<h2>В последнее время на создание новинок меня толкает моя маленькая крестница, большая любительница мороженного...</h2>
			<div>
				<img className="new-icecream" src={iceCream}></img>
				<img className="new-icecream" src={food}></img>
				<img className="new-icecream" src={sweets}></img>
			</div>
			
		</>
	)
}

export default New;