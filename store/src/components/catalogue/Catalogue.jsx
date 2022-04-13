import { DataCards } from '../../assets/DataCards';

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

const ListItem = () => {
	return(<>
		{DataCards.map((card) => (<CardItem
			key={card.id}
			id={card.id}
			title={card.title}
			image={card.image}
			description={card.description}
			price={card.price}
		>
		</CardItem>))}
		</>
	)
}

export {CardItem, ListItem};