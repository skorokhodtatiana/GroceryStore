import { useState } from "react";

const Reviews = () => {
	const [review, setReview] = useState();
	// const arr = [];
	const [arr, setArr] = useState([]);

	const createNewReview = (e) => {
		setReview(e.target.value);
	}

	const showRevievs = () => {
		const reviewBlock = document.getElementById('reviewBlock');
		const val = review;
		arr.push(val);
		setReview('');
	}
	return(
		<div className="review">
			<div className="review__new">
				<label for="textarea" className="review__leave">Оставте свой отзыв</label>
				<textarea value={review} type="text" onChange={(e) => createNewReview(e)} placeholder="Напишите здесь все, чем хотите поделиться" id="textarea" className="review__textarea"></textarea>
				<button onClick={showRevievs} className="review__button">Поделиться</button>
			</div>
			<div class="review__block" id="reviewBlock">
				<ul class="review__block-list">
					{arr.map((item) => (
						<li>{item}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Reviews;