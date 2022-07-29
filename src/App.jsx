import React from "react";
import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import CardBox from "./components/CardBox/CardBox";

export default function App() {
	return (
		<div className={styles.container}>
			<Navbar />
			<Header />
			<CardBox />
		</div>
	);
}
