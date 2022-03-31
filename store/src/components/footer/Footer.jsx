import './_footer.scss';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faVk} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<div className='footer'>
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