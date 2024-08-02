import './_header.scss';
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="headerWrapper">
			<div className="header">
				<h1 className="header__title">
					<Link to="/" className="link-title">GroceryStoreBY</Link>
				</h1>
				<nav className="header__nav">
					<ul className="header__list">
						<li className="header__list-item header__about-me">
							<Link to="/aboutMe" className="link">
								Обо мне
							</Link>
						</li>
						<li className="header__list-item">
							<Link to="/catalogue" className="link">
								Каталог
							</Link>
						</li>
						<li className="header__list-item">
							<Link to="/payment" className="link">
								Оплата и доставка
							</Link>
						</li>
						<li className="header__list-item">
							<Link to="reviews" className="link">
								Отзывы
							</Link>
						</li>
						<li className="header__list-item">
							<Link to="games" className="link">
								Игры
							</Link>
						</li>
						<li className="header__list-item">
							<Link to="new" className="link">
								Новинки
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Header;