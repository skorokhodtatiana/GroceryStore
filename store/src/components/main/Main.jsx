import mainphoto from '../../assets/images/photo-main.jpg';
import './_main.scss';


const MainBlock = () => {
	return (
		<div>
			<div className="wrapper-img">
				<img className="wrapper-img__img-main" src={ mainphoto } alt={ "mainphoto" }></img>
			</div>
		</div>
	)
}

export default MainBlock;