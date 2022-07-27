import iceCream from '../../assets/images/iceCream.jpg';
import './news.scss';

const New = () => {
	return(
		<>
			<h2>В последнее время на создание новинок меня толкает моя маленькая крестница, большая любительница мороженного...</h2>
			<img className="new-icecream" src={iceCream}></img>
		</>
	)
}

export default New;