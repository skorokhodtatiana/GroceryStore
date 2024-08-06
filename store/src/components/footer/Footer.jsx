import './_footer.scss';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faVk} from "@fortawesome/free-brands-svg-icons";
import apple from '../../assets/images/apple-removebg.png';
import pumpkin from '../../assets/images/pumpkin-removebg.png';
import iceCream from '../../assets/images/iceCream-removebg.png';
import mushroom from '../../assets/images/mushroom-removebg.png';
import radish from '../../assets/images/radish-removebg.png';
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__nav'>
				<div className='footer__picture-wrapper'>
					<Link to="/catalogue">Каталог</Link>
				</div>
				<div className='footer__picture-wrapper'>
					<Link to="/catalogue">О нас</Link>
				</div>
				<div className='footer__picture-wrapper'>
					<Link to="/catalogue">Доставка</Link>
				</div>
				<div className='footer__picture-wrapper'>
					<Link to="/catalogue">Контакты</Link>
				</div>
			</div>
			<div className='footer__content'>
				<a href='https://www.instagram.com/natashina_pekarnya/'>
					<FontAwesomeIcon icon={faInstagram} className={"footer__icon iconInstagram"}/>
				</a>
				<a href='https://www.instagram.com/natashina_pekarnya/'>
					<FontAwesomeIcon icon={faFacebook} className={"footer__icon iconFacebook"}/>
				</a>
				<a href='https://www.instagram.com/natashina_pekarnya/'>
					<FontAwesomeIcon icon={faVk} className={"footer__icon iconInstagram"}/>
				</a>
			</div>
			<div className='footer__author'>© 2022 Natalia Tatarginskaja</div>
		</div>
	)
};

export default Footer;
