import './_footer.scss';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<div className='footer'>
			<a href='https://www.instagram.com/natashina_pekarnya/'>
			<FontAwesomeIcon icon={faInstagram} className="footer__iconInstagram" />
			</a>
			<a href='https://www.instagram.com/natashina_pekarnya/'>
			<FontAwesomeIcon icon={faFacebook} className="footer__iconFacebook" />
			</a>
		</div>
	)
};

export default Footer;