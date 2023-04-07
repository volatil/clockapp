// export default const bgrandom = function() {

// 	console.debug( `Numero: ${numerorandom}` );
// };

export default function bgrandom() {
	const max = 6;
	const min = 1;
	const numerorandom = Math.floor(Math.random() * (max - min + 1) + min);
	console.debug( `Numero 0207: ${numerorandom}` );
	return numerorandom;
}
