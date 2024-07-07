import './_header.scss';
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<div className="headerWrapper">
				<h1 className="headerWrapper__title">
					<Link to="/" className="link-title">GroceryStoreBY</Link>
				</h1>
				<nav className="headerWrapper__nav">
					<ul className="headerWrapper__list">
						<li className="headerWrapper__list-item headerWrapper__about-me">
							<Link to="/aboutMe" className="link">
								Обо мне
							</Link>
						</li>
						<li className="headerWrapper__list-item">
							<Link to="/catalogue" className="link">
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
						<li className="headerWrapper__list-item">
							<Link to="new" className="link">
								Новинки
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	)
}

export default Header;