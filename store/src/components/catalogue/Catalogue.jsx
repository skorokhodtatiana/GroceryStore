const CardItem = (props) => {
	const {title, image, description, price} = props;
	return(
		<div>
			<div>
				<h2>{title}</h2>
				<div>
					<img src={image} alt={"image"}></img>
				</div>
				<div>{description}</div>
				<div>{price}</div>
			</div>
		</div>
	)
}