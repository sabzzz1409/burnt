export default (_req, _res, next) => {
	const { log } = console;
	log('midleware here');
	next();
}
