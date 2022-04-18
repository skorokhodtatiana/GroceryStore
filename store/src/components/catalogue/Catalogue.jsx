import { DataCards } from '../../assets/DataCards';

const CardItem = (props) => {
	const {title, image, description, price} = props;
	return(
		<div>
			<div className='card'>
				<h2 className='card__title'>{title}</h2>
				<div className='card__wrapper-img'>
					<img className='card__img' src={image} alt={"image"}></img>
				</div>
				<div className='card__description'>{description}</div>
				<div className='card__price'>{price}</div>
			</div>
		</div>
	)
}

const ListItem = () => {
	return(<div className='block-catalouge'>
		{DataCards.map((card) => (<CardItem
			key={card.id}
			id={card.id}
			title={card.title}
			image={card.image}
			description={card.description}
			price={card.price}
		>
		</CardItem>))}
		</div>
	)
}

export {CardItem, ListItem};