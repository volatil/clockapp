import { useState, useEffect } from "react";

import css from "../styles/Home.module.css";

function TheTime() {
	// const [hourInterval, sethourInterval] = useState(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
	const [hourInterval, sethourInterval] = useState("...");
	const greet = function (param) {
		if ( param <= 11 ) return "good morning";
		if ( param <= 18 ) return "good afternoon";
		return "good night";
	};
	const image = function (param) {
		if ( param >= 18 && param <= 5 ) return "/assets/svg/sun.svg";
		return "/assets/svg/moon.svg";
	};
	const amorpm = function (param) {
		if ( param <= 12 ) return "AM";
		return "PM";
	};

	useEffect(() => {
		setInterval(() => {
			const hours = {
				hour: String(new Date().getHours()).length <= 1 ? `0${new Date().getHours()}` : new Date().getHours(),
				minute: String(new Date().getMinutes()).length <= 1 ? `0${new Date().getMinutes()}` : new Date().getMinutes(),
				second: String(new Date().getSeconds()).length <= 1 ? `0${new Date().getSeconds()}` : new Date().getSeconds(),
			};
			// console.debug( "asdasd" );
			const test = `${hours.hour}:${hours.minute}:${hours.second}`;
			sethourInterval(test);
		}, 1000);
	}, []);

	return (
		<div className={css.hora}>
			<div className={css.superior}>
				<img src={image(new Date().getHours())} alt="sun/moon" />
				<p>{greet(new Date().getHours())}, IT&apos;S CURRENTLY</p>
			</div>
			<div className={css.inferior}>
				{/* <p>{`${new Date().getHours()}:${hours.minute}:${hours.second}`} <span>{amorpm(new Date().getHours())}</span></p> */}
				<p>{hourInterval} <span>{amorpm(new Date().getHours())}</span></p>
			</div>
		</div>
	);
}
export default TheTime;
