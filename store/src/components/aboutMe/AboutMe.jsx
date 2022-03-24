import './_aboutMe.scss';
import master from '../../assets/images/master.jpg';

const AboutMe = () => {
	return (
		<div>
			<div className='wrapper-master-photo'>
				<img className='wrapper-master-photo__img' src={master} alt={"master"}></img>
			</div>
		</div>
	)
}

export default AboutMe;