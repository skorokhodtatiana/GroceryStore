import { useState } from "react";

const Reviews = () => {
	const [review, setReview] = useState();

	const showRevievs = () => {
		const reviewBlock = document.getElementById('reviewBlock');
		
			reviewBlock.innerHTML = "иииии";
		
	}
	return(
		<div className="review">
			<div className="review__new">
				<label for="textarea" className="review__leave">Оставте свой отзыв</label>
				<textarea value={review} type="text" placeholder="Напишите здесь все, чем хотите поделиться" id="textarea" className="review__textarea"></textarea>
				<button onClick={showRevievs} className="review__button">Поделиться</button>
			</div>
			<div class="review__block" id="reviewBlock">
				<ul>
					<li></li>
				</ul>
			</div>
		</div>
	)
}

export default Reviews;