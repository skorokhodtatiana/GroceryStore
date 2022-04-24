import { useState } from "react";

const Reviews = () => {
	const [review, setReview] = useState();
	return(
		<div>
			<div className="review">
				<label for="textarea" className="review__leave">Оставте свой отзыв</label>
				<textarea value={review} type="text" placeholder="Напишите здесь все, чем хотите поделиться" id="textarea" className="review__textarea"></textarea>
				<button className="review__button">Поделиться</button>
			</div>
		</div>
	)
}

export default Reviews;