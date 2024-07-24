import { DataCards } from '/Users/tatsianaskarakhod/Documents/github/GroceryStore/store/src/assets/DataCards';
import Button from '../button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faHeart } from '@fortawesome/fontawesome-free-solid'
//import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const CardItemPreviev = (props) => {
	const sentToFavorite = (id) => {
		console.log(`.js-to-favorite-${id}`);
		const chooseItem = document.querySelector(`.js-to-favorite-${id}`);
		console.log(chooseItem);
		chooseItem.style.color = 'red';
	};

	const { title, image, description, price, discount, id } = props;
	return(
		<div>
			<div className='card'>
				<div className='card__wrapper-img'>
					<FontAwesomeIcon className={"card__to-favorite js-to-favorite-" + id} id={id} icon={ faHeart } onClick={() => sentToFavorite(id)} />
					<img className='card__img' src={image} alt={title}></img>
				</div>
				{/* <button className='card__to-favorite'></button> */}
				<div className='card__description-block'>
					<div className='card__price-block'>
						<div className='card__price'>{price}</div>
						<div className='card__discount'>{discount}</div>
					</div>
				</div>
				<h2 className='card__title'>{title}</h2>
				<Button
					className={ 'card__to-basket' }
					disabled={ false }
					type="submit"
				>
					Купить
				</Button>
			</div>
		</div>
	)
}

const CardItem = (props) => {
	const {title, image, description, price} = props;
	return(
		<div>
			<div className='card'>
				{/* <h2 className='card__title'>{title}</h2> */}
				<div className='card__wrapper-img'>
					<img className='card__img' src={image} alt={title}></img>
				</div>
				<div className='card__description-block'>
					<div className='card__description'>{description}</div>
					<div className='card__price'>{price}</div>
				</div>
			</div>
		</div>
	)
}

const ListItem = () => {
	return(
		<div className='block-catalouge'>
			{DataCards.map(card => <CardItemPreviev
				key={card.id}
				id={card.id}
				title={card.title}
				image={card.image}
				description={card.description}
				price={card.price}
			>
			</CardItemPreviev>)}
		</div>
	)
}

export {CardItemPreviev, ListItem};