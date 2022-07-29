import React from "react";
import styles from "./CardBox.module.css";
import Card from "../Card/Card";
import data from '../../data/Data.js'


function CardBox() {
	return (
		<div className={styles.box}>
			{data.map(item => {
				return <Card {...item} key={item.price} />;
			})}
		</div>
	);
}

export default CardBox;
