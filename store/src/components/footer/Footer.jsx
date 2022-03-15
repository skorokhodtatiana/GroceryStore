import './_footer.scss';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<div>
			<a href='https://www.instagram.com/natashina_pekarnya/'>
			<FontAwesomeIcon icon={faInstagram} className="iconInstagram" />
			</a>
		</div>
	)
};

export default Footer;