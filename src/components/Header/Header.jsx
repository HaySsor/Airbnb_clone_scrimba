import React from "react";
import styles from "./Header.module.css";
import photo1 from "../../assets/photo1.svg";
import photo2 from "../../assets/photo2.svg";
import photo3 from "../../assets/photo3.svg";
import photo4 from "../../assets/photo4.svg";
import photo5 from "../../assets/photo5.svg";
import photo6 from "../../assets/photo6.svg";
import photo7 from "../../assets/photo7.svg";
import photo8 from "../../assets/photo8.svg";
import photo9 from "../../assets/photo9.svg";

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.imgBox}>
				<img className={styles.img1} src={photo1} />
				<img className={styles.img2} src={photo2} />
				<img className={styles.img3} src={photo3} />
				<img className={styles.img4} src={photo4} />
				<img className={styles.img5} src={photo5} />
				<img className={styles.img6} src={photo6} />
				<img className={styles.img7} src={photo7} />
				<img className={styles.img8} src={photo8} />
				<img className={styles.img9} src={photo9} />
			</div>
			<h1 className={styles.title}>Online Experiences</h1>
			<p className={styles.info}>
				Join unique interactive activities led by one-of-a-kind hosts—all
				without leaving home.
			</p>
		</header>
	);
}

export default Header;
