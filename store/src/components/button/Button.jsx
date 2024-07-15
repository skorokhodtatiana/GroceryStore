import PropTypes from 'prop-types';

const TButton = {
	className: PropTypes.string,
	disabled: PropTypes.bool,
	href: PropTypes.string,
	type: PropTypes.oneOf(['button', 'reset', 'submit', null]),
	children: PropTypes.node,
};

const Button = ({
	className,
	variant,
	disabled,
	size,
	children,
    href,
	type = 'button',
	...props
}) => {

	return (
		<button className={ className }
			disabled={ disabled }
			href={ href }
			type={ type }
			{...props}
		>
			{ children }
		</button>
	);
};

Button.propTypes = TButton;

export default Button;