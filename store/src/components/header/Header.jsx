import './_header.scss';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
  } from "react-router-dom";
import mainphoto from '../../assets/images/photo-main.jpg';

const Header = () => {
	return (
		<>
			<div className="headerWrapper">
				<h1 className="headerWrapper__title">GroceryStoreBY</h1>
				<nav className="headerWrapper__nav">
					<ul className="headerWrapper__list">
						<li className="headerWrapper__list-item">
							<Link to="/" className="link">
								Обо мне
							</Link>
						</li>
						<li className="headerWrapper__list-item">
							<Link to="/catalog" className="link">
								Каталог
							</Link>
						</li>
						<li className="headerWrapper__list-item">
							<Link to="/payment" className="link">
								Оплата и доставка
							</Link>
						</li>
						<li className="headerWrapper__list-item">
							<Link to="reviews" className="link">
								Отзывы
							</Link>
						</li>
						<li className="headerWrapper__list-item">
							<Link to="games" className="link">
								Игры
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className="wrapper-img">
				<img className="wrapper-img__img-main" src={ mainphoto } alt={ "mainphoto" }></img>
			</div>
		</>
	)
}

export default Header;