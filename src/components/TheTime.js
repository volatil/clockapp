import css from "../styles/Home.module.css";

function TheTime() {
	console.debug( String(new Date().getHours()).length );
	const hours = {
		hour: String(new Date().getHours()).length <= 1 ? `0${new Date().getHours()}` : new Date().getHours(),
		minute: String(new Date().getMinutes()).length <= 1 ? `0${new Date().getMinutes()}` : new Date().getMinutes(),
	};
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

	return (
		<div className={css.hora}>
			<div className={css.superior}>
				<img src={image(hours.hour)} alt="sun/moon" />
				<p>{greet(hours.hour)}, IT&apos;S CURRENTLY</p>
			</div>
			<div className={css.inferior}>
				<p>{`${hours.hour}:${hours.minute}`} <span>{amorpm(hours.hour)}</span></p>
			</div>
		</div>
	);
}
export default TheTime;
