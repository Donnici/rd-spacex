import { Server } from './src/architecture';
import { PORT } from './src/shared/environment';

if (process.env.NODE_ENV !== 'production') {
	require('source-map-support/register');
	require('module-alias/register');
}

const server = new Server(PORT);
server.run();
