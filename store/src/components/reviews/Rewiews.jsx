import { useState } from "react";

const Reviews = () => {
	const [review, setReview] = useState();

	const showRevievs = () => {
		
	}
	return(
		<div className="review">
			<div className="review__new">
				<label for="textarea" className="review__leave">Оставте свой отзыв</label>
				<textarea value={review} type="text" placeholder="Напишите здесь все, чем хотите поделиться" id="textarea" className="review__textarea"></textarea>
				<button onClick={showRevievs} className="review__button">Поделиться</button>
			</div>
			<div className="review__block">
				<ul>
					<li></li>
				</ul>
			</div>
		</div>
	)
}

export default Reviews;