import React from "react";
import styles from "./Card.module.css";
import star from "../../assets/star.svg";

function Card({ rating, opinionNumber, textInfo, img, price, openSpots, location, }) {

	let badgeText
	if (openSpots === 0) {
		badgeText = "SOLD OUT"
	} else if (location === "Online") {
		badgeText = "ONLINE"
	}
	console.log(img);
	return (
		<div className={styles.card}>
			<img className={styles.photo} src={img} />
			{badgeText ? <div className={styles.status}>{badgeText}</div> : null}
			<div className={styles.cardInfo}>
				<div className={styles.cardStra}>
					<img src={star} />
					<span className={styles.rating}>{rating}</span>
					<span> ({opinionNumber}) • USA </span>
				</div>
				<p className={styles.text}>{textInfo}</p>
				<p className={styles.text}>
					<span>From ${price} /</span> person
				</p>
			</div>
		</div>
	);
}

export default Card;
