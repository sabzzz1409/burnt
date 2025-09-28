import cors
	from 'cors';

export default cors({
	origin: "*", // list of allowed origins
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // allowed HTTP methods
	// allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], // allowed request headers
	// exposedHeaders: ['Content-Length', 'X-Custom-Header'], // headers exposed to the client
	credentials: true, // allow cookies/authorization headers
	maxAge: 600 // cache preflight response for 10 minutes
});
